import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../../firebase'

const NextMatch = () => {
  const [days, setDays] = useState('')
  const [hours, setHours] = useState('')
  const [minutes, setMinutes] = useState('')
  const [seconds, setSeconds] = useState('')
  const [eventData, setEventData] = useState([])

  const fetchEventData = async () => {
    const querySnapshot = await getDocs(collection(db, 'events_calendar'))
    const events = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      events.push(doc.data())
    })
    setEventData(events[0])
  }

  const seeData = () => {
    console.log(eventData)
  }

  useEffect(() => {
    fetchEventData()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      commingSoonTime()
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const commingSoonTime = () => {
    let endTime = new Date('August 23, 2022 17:00:00 PDT')
    let endTimeParse = Date.parse(endTime) / 1000
    let now = new Date()
    let nowParse = Date.parse(now) / 1000
    let timeLeft = endTimeParse - nowParse
    let days = Math.floor(timeLeft / 86400)
    let hours = Math.floor((timeLeft - days * 86400) / 3600)
    let minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60)
    let seconds = Math.floor(
      timeLeft - days * 86400 - hours * 3600 - minutes * 60
    )
    if (hours < '10') {
      hours = '0' + hours
    }
    if (minutes < '10') {
      minutes = '0' + minutes
    }
    if (seconds < '10') {
      seconds = '0' + seconds
    }
    setDays(days)
    setHours(hours)
    setMinutes(minutes)
    setSeconds(seconds)
  }

  return (
    <section className='next-match-area'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-lg-6 col-md-12'>
            <div className='next-match-content'>
              <div className='content'>
                <div className='row align-items-center'>
                  <div className='col-lg-5 col-md-5'>
                    <h2>Next Match</h2>
                    <span className='sub-title'>
                      <button onClick={seeData}>Fetch Data</button>
                      Champions League - 20 April, 2020
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
                        {days} <span>Days</span>
                      </div>
                      <div
                        id='hours'
                        className='align-items-center flex-column d-flex justify-content-center'
                      >
                        {hours} <span>Hours</span>
                      </div>
                      <div
                        id='minutes'
                        className='align-items-center flex-column d-flex justify-content-center'
                      >
                        {minutes} <span>Minutes</span>
                      </div>
                      <div
                        id='seconds'
                        className='align-items-center flex-column d-flex justify-content-center'
                      >
                        {seconds} <span>Seconds</span>
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