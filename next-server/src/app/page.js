'use client'
import React, { useEffect, useState } from 'react'
import Banner from '../../src/app/components/banner/Banner'
import NextMatch from './components/nextMatch/NextMatch'
import UpcomingMatches from '../../src/app/components/UpcomingMatches'
import MatcheHighlights from '../../src/app/components/MatcheHighlights'
import Products from '../../src/app/components/Products'
import Partners from '../../src/app/components/Partners'
import Gallery from '../../src/app/components/Gallery'
// import Subscribe from '../../src/app/components/Subscribe'
import BlogPost from '../../src/app/components/BlogPost'
import Navbar from '../../src/app/components/nav/Navbar'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase'

const Football = () => {
  const [eventData, setEventData] = useState([])

  const fetchEventData = async () => {
    const querySnapshot = await getDocs(collection(db, 'events_calendar'))
    const events = []
    querySnapshot.forEach((doc) => {
      console.log(doc.data())
      events.push(doc.data())
    })
    setEventData(events[0].events)
  }

  useEffect(() => {
    fetchEventData()
  }, [])
  return (
    <>
      <Navbar />

      <Banner />

      <NextMatch eventData={eventData} />

      <UpcomingMatches />

      <MatcheHighlights />

      <Products />

      <Partners />

      <Gallery />

      {/* <Subscribe /> */}

      <BlogPost />
    </>
  )
}

export default Football
