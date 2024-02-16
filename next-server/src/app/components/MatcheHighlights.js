import React, { Component } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
// import OwlCarousel from 'react-owl-carousel3'
// const OwlCarousel = dynamic(import('react-owl-carousel3'));

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.min.css'

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: false,
  items: 1,
  navText: ["<i class='flaticon-left'></i>", "<i class='flaticon-right'></i>"],
}

class MatcheHighlights extends Component {
  // Carousel
  state = {
    display: false,
  }

  componentDidMount() {
    this.setState({ display: true })
  }

  // Popup Video
  state = {
    isOpen: false,
  }
  openModal = () => {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <>
        <div id='highlights'>
          {/* {this.state.display ? (
            <OwlCarousel
              className='matches-highlights-slides owl-carousel owl-theme'
              {...options}
            >
              <div className='single-matches-highlights-item highlights-bg1'>
                <div className='container'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='content'>
                        <h3>Matches Highlights</h3>
                        <span>Champions League - 20 April, 2020</span>
                      </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <div className='highlights-video'>
                        <Link
                          href='#play-video'
                          onClick={(e) => {
                            e.preventDefault()
                            this.openModal()
                          }}
                          className='video-btn popup-youtube'
                        >
                          <span>Play Video</span>
                          <i className='flaticon-play-button'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='single-matches-highlights-item highlights-bg2'>
                <div className='container'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='content'>
                        <h3>Matches Highlights</h3>
                        <span>Premier League - 19 April, 2020</span>
                      </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <div className='highlights-video'>
                        <Link
                          href='#play-video'
                          onClick={(e) => {
                            e.preventDefault()
                            this.openModal()
                          }}
                          className='video-btn popup-youtube'
                        >
                          <span>Play Video</span>
                          <i className='flaticon-play-button'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='single-matches-highlights-item highlights-bg3'>
                <div className='container'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='content'>
                        <h3>Matches Highlights</h3>
                        <span>Champions League - 18 April, 2020</span>
                      </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <div className='highlights-video'>
                        <Link
                          href='#play-video'
                          onClick={(e) => {
                            e.preventDefault()
                            this.openModal()
                          }}
                          className='video-btn popup-youtube'
                        >
                          <span>Play Video</span>
                          <i className='flaticon-play-button'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='single-matches-highlights-item highlights-bg4'>
                <div className='container'>
                  <div className='row align-items-center'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='content'>
                        <h3>Matches Highlights</h3>
                        <span>Premier League - 17 April, 2020</span>
                      </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <div className='highlights-video'>
                        <Link
                          href='#play-video'
                          onClick={(e) => {
                            e.preventDefault()
                            this.openModal()
                          }}
                          className='video-btn popup-youtube'
                        >
                          <span>Play Video</span>
                          <i className='flaticon-play-button'></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          ) : (
            ''
          )} */}
        </div>

        {/* If you want to change the video need to update below videoID */}
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId='L61p2uyiMSo'
          onClose={() => this.setState({ isOpen: false })}
        />
      </>
    )
  }
}

export default MatcheHighlights
