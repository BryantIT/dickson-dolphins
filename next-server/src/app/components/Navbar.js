import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Image from 'next/image'

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true)

  const toggleNavbar = () => {
    setCollapsed(!collapsed)
  }

  useEffect(() => {
    const handleScroll = () => {
      const elementId = document.getElementById('navbar')
      const scrollY = window.scrollY

      if (scrollY > 170) {
        elementId.classList.add('is-sticky')
      } else {
        elementId.classList.remove('is-sticky')
      }

      const mainNavLinks = document.querySelectorAll('.navbar-nav li a')
      mainNavLinks.forEach((link) => {
        if (link.hash) {
          const section = document.querySelector(link.hash)
          if (section) {
            if (
              section.offsetTop <= scrollY &&
              section.offsetTop + section.offsetHeight > scrollY
            ) {
              link.classList.add('active')
            } else {
              link.classList.remove('active')
            }
          }
        }
      })
    }

    // Initialize sticky nav and active link class
    handleScroll()

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const classOne = collapsed
    ? 'collapse navbar-collapse'
    : 'collapse navbar-collapse show'
  const classTwo = collapsed
    ? 'navbar-toggler navbar-toggler-right collapsed'
    : 'navbar-toggler navbar-toggler-right'

  return (
    <nav id='navbar' className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <Link href='/football'>
          <div className='navbar-brand'>
            <Image
              src='/images/football/logo.jpeg'
              alt='logo'
              width={90}
              height={90}
            />
          </div>
        </Link>
        <button
          onClick={toggleNavbar}
          className={classTwo}
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className={classOne} id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto'>
            <li className='nav-item'>
              <AnchorLink
                onClick={toggleNavbar}
                offset={() => 100}
                className='nav-link active'
                href='#home'
              >
                Home
              </AnchorLink>
            </li>
            {/* Add other <li> elements for each navigation link, similar to the Home link */}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
