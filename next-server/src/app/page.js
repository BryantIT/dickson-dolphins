'use client'
import React from 'react'
import Banner from '../../src/app/components/banner/Banner'
import NextMatch from '../../src/app/components/NextMatch'
import UpcomingMatches from '../../src/app/components/UpcomingMatches'
import MatcheHighlights from '../../src/app/components/MatcheHighlights'
import Products from '../../src/app/components/Products'
import Partners from '../../src/app/components/Partners'
import Gallery from '../../src/app/components/Gallery'
// import Subscribe from '../../src/app/components/Subscribe'
import BlogPost from '../../src/app/components/BlogPost'
import Navbar from '../../src/app/components/nav/Navbar'

const Football = () => {
  return (
    <>
      <Navbar />

      <Banner />

      <NextMatch />

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
