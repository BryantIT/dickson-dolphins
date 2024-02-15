import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
// const OwlCarousel = dynamic(import('react-owl-carousel3'))
import OwlCarousel from 'react-owl-carousel3'
// image imports
import footbteam1 from '../../../public/images/football/footb-team1.png'
import footbteam2 from '../../../public/images/football/footb-team2.png'
import footbplayer1 from '../../../public/images/football/footb-player1.png'

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: false,
  margin: 30,
  navText: [
    "<i class='flaticon-right-arrow'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 2,
    },
    1200: {
      items: 2,
    },
  },
}

class UpcomingMatches extends Component {
  state = {
    display: false,
  }

  componentDidMount() {
    this.setState({ display: true })
  }

  render() {
    return (
      <section id='matches' className='upcoming-matches-area pt-100 pb-70'>
        <div className='container'>
          <div className='section-title'>
            <h2>Upcoming Matches</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>

          {this.state.display ? (
            <OwlCarousel
              className='upcoming-matches-slides owl-carousel owl-theme'
              {...options}
            >
              <div className='single-upcoming-matches-item'>
                <div className='date'>
                  <span>25 April, 2020</span>
                </div>
                <h3>Semi Final</h3>
                <span className='sub-title'>Champions League</span>

                <div className='vs-matches'>
                  <div className='img'>
                    <Image src={footbteam1} alt='image' />
                  </div>
                  <h4>Napoli</h4>
                  <span>VS</span>
                  <h4>Barcelona</h4>
                  <div className='img'>
                    <Image src={footbteam2} alt='image' />
                  </div>
                </div>

                <Link href='#' className='default-btn'>
                  Buy Ticket
                </Link>
              </div>

              <div className='single-upcoming-matches-item'>
                <div className='date'>
                  <span>15 May, 2020</span>
                </div>
                <h3>Final</h3>
                <span className='sub-title'>Champions League</span>

                <div className='vs-matches'>
                  <div className='img'>
                    <Image src={footbteam1} alt='image' />
                  </div>
                  <h4>Real Madrid</h4>
                  <span>VS</span>
                  <h4>Barcelona</h4>
                  <div className='img'>
                    <Image src={footbteam2} alt='image' />
                  </div>
                </div>

                <Link href='#' className='default-btn'>
                  Buy Ticket
                </Link>
              </div>

              <div className='single-upcoming-matches-item'>
                <div className='date'>
                  <span>29 April, 2020</span>
                </div>
                <h3>1st Round</h3>
                <span className='sub-title'>La Liga</span>

                <div className='vs-matches'>
                  <div className='img'>
                    <Image src={footbteam1} alt='image' />
                  </div>
                  <h4>Sevilla</h4>
                  <span>VS</span>
                  <h4>Barcelona</h4>
                  <div className='img'>
                    <Image src={footbteam2} alt='image' />
                  </div>
                </div>

                <Link href='#' className='default-btn'>
                  Buy Ticket
                </Link>
              </div>
            </OwlCarousel>
          ) : (
            ''
          )}
        </div>

        <div className='upcoming-matches-shape1'>
          <div className='img'>
            <Image src={footbplayer1} alt='image' />
          </div>
        </div>
      </section>
    )
  }
}

export default UpcomingMatches
