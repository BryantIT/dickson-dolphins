import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { DateTime } from 'luxon'
import { dateConversion } from '../../utility/timeHandler'

const NextMatch = ({ eventData }) => {
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [nextEvent, setNextEvent] = useState(null)

  useEffect(() => {
    if (eventData) {
      const events = eventData
      const now = DateTime.now()

      let closestEvent = null
      let closestsEventTime = Infinity

      events.forEach((event) => {
        const eventDateTime = dateConversion(
          event.date.seconds,
          event.date.nanoseconds
        )
        const timeDiff = eventDateTime.diff(now, 'seconds').seconds

        if (timeDiff > 0 && timeDiff < closestsEventTime) {
          closestsEventTime = timeDiff
          closestEvent = event
        }
      })
      setNextEvent(closestEvent)
    }
  }, [eventData])

  useEffect(() => {
    if (!nextEvent) {
      return
    }
    const countDownTimer = () => {
      const now = DateTime.now()
      const target = DateTime.fromSeconds(nextEvent.date.seconds).plus({
        milliseconds: nextEvent.date.nanoseconds / 1e6,
      })
      const diff = target.diff(now, ['days', 'hours', 'minutes']).toObject()
      setDays(diff.days)
      setHours(diff.hours)
      setMinutes(Math.floor(diff.minutes))
    }
    countDownTimer()

    const interval = setInterval(countDownTimer, 60000)

    return () => clearInterval(interval)
  }, [nextEvent])

  return (
    <section className='next-match-area'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='next-match-content'>
              <div className='content'>
                <div className='row align-items-center'>
                  <div className='col-lg-5 col-md-5'>
                    <h2>Next Event:</h2>
                    <span className='sub-title'>
                      {nextEvent ? nextEvent.title : 'No Event'}
                    </span>
                  </div>

                  <div className='col-lg-7 col-md-7'>
                    <div
                      id='timer'
                      className='flex-wrap d-flex justify-content-center'
                    >
                      <div
                        id='days'
                        className='align-items-center flex-column d-flex justify-content-center'
                      >
                        {days} <span>{days === 1 ? 'Day' : 'Days'}</span>
                      </div>
                      <div
                        id='hours'
                        className='align-items-center flex-column d-flex justify-content-center'
                      >
                        {hours} <span>{hours === 1 ? 'Hour' : 'Hours'}</span>
                      </div>
                      <div
                        id='minutes'
                        className='align-items-center flex-column d-flex justify-content-center'
                      >
                        {minutes}{' '}
                        <span>{minutes === 1 ? 'Minute' : 'Minutes'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='shape1'>
                <div className='img'>
                  <Image
                    src='/images/football/footb-playing.png'
                    alt='image'
                    width={854}
                    height={319}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className='col-lg-6 col-md-12'>
            <div className='next-match-image'>
              <div className='img'>
                <Image
                  src='/images/football/footb-field.jpg'
                  alt='image'
                  width={945}
                  height={350}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NextMatch
