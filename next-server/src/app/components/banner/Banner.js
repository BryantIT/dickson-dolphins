import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import './banner.css'

const Banner = () => {
  return (
    <div id='home' className='main-banner jarallax'>
      <div className='d-table'>
        <div className='d-table-cell'>
          <div className='container-fluid'>
            <div className='main-banner-content'>
              <span className='sub-title'>Dickson</span>
              <h1>Dolphins</h1>
            </div>
          </div>
        </div>
      </div>

      <div className='banner-footer-content'>
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col-lg-6 col-sm-6'>
              <ul className='social'>
                <li>
                  <a
                    href='https://www.facebook.com/DicksonDolphins'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <span className='icon'>
                      <FaFacebook />
                    </span>
                  </a>
                </li>
                <li>
                  <Link href='#'>
                    <span className='icon'>
                      <FaXTwitter />
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href='#'>
                    <span className='icon'>
                      <FaInstagram />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
