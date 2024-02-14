'use client'
import React from 'react'
import Banner from './components/Banner'
import NextMatch from './components/NextMatch'
import UpcomingMatches from './components/UpcomingMatches'
import MatcheHighlights from './components/MatcheHighlights'
import Products from './components/Products'
import Partners from './components/Partners'
import Gallery from './components/Gallery'
import Subscribe from './components/Subscribe'
import BlogPost from './components/BlogPost'

const Football = () => {
  return (
    <>
      <Banner />

      <NextMatch />

      <UpcomingMatches />

      <MatcheHighlights />

      <Products />

      <Partners />

      <Gallery />

      <Subscribe />

      <BlogPost />
    </>
  )
}

export default Football
