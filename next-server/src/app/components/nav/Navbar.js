import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa'
import { FaXmark } from 'react-icons/fa6'
import './nav.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className='wrapper'>
          <div className='logo'>
            <a href='#'>Dickson Dolphins</a>
          </div>
          <input type='radio' name='slider' id='menu-btn' />
          <input type='radio' name='slider' id='close-btn' />
          <ul className='nav-links'>
            <label for='close-btn' className='btn close-btn'>
              <FaXmark />
            </label>
            <li>
              <a href='#'>Home</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            {/* <li>
              <a href='#' className='desktop-item'>
                Dropdown Menu
              </a>
              <input type='checkbox' id='showDrop' />
              <label for='showDrop' className='mobile-item'>
                Dropdown Menu
              </label>
              <ul className='drop-menu'>
                <li>
                  <a href='#'>Drop menu 1</a>
                </li>
                <li>
                  <a href='#'>Drop menu 2</a>
                </li>
                <li>
                  <a href='#'>Drop menu 3</a>
                </li>
                <li>
                  <a href='#'>Drop menu 4</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a href='#' className='desktop-item'>
                Football
              </a>
              <input type='checkbox' id='showMega' />
              <label for='showMega' className='mobile-item'>
                Football
              </label>
              <div className='mega-box'>
                <div className='content'>
                  <div className='row'>
                    <img src='./images/football/logo.jpeg' alt='' />
                  </div>
                  <div className='row'>
                    <header>Team</header>
                    <ul className='mega-links'>
                      <li>
                        <a href='#'>Roster</a>
                      </li>
                      <li>
                        <a href='#'>Coaches</a>
                      </li>
                    </ul>
                  </div>
                  <div className='row'>
                    <header>Events</header>
                    <ul className='mega-links'>
                      <li>
                        <a href='#'>Upcoming</a>
                      </li>
                      <li>
                        <a href='#'>Past</a>
                      </li>
                    </ul>
                  </div>
                  <div className='row'>
                    <header>Important Information</header>
                    <ul className='mega-links'>
                      <li>
                        <a href='#'>Code of Conduct</a>
                      </li>
                      <li>
                        <a href='#'>Safety</a>
                      </li>
                      <li>
                        <a href='#'>Uniform Requirments</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#' className='desktop-item'>
                Cheer
              </a>
              <input type='checkbox' id='showMega' />
              <label for='showMega' className='mobile-item'>
                Cheer
              </label>
              <div className='mega-box'>
                <div className='content'>
                  <div className='row'>
                    <img src='./images/football/logo.jpeg' alt='' />
                  </div>
                  <div className='row'>
                    <header>Team</header>
                    <ul className='mega-links'>
                      <li>
                        <a href='#'>Roster</a>
                      </li>
                      <li>
                        <a href='#'>Coaches</a>
                      </li>
                    </ul>
                  </div>
                  <div className='row'>
                    <header>Events</header>
                    <ul className='mega-links'>
                      <li>
                        <a href='#'>Upcoming</a>
                      </li>
                      <li>
                        <a href='#'>Past</a>
                      </li>
                    </ul>
                  </div>
                  <div className='row'>
                    <header>Important Information</header>
                    <ul className='mega-links'>
                      <li>
                        <a href='#'>Code of Conduct</a>
                      </li>
                      <li>
                        <a href='#'>Safety</a>
                      </li>
                      <li>
                        <a href='#'>Uniform Requirments</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <a href='#'>Registration</a>
            </li>
            <li>
              <a href='#'>Sponsors</a>
            </li>
          </ul>
          <label for='menu-btn' className='btn menu-btn'>
            <FaBars />
          </label>
        </div>
      </nav>
    </>
  )
}

export default Navbar
