import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// image imports
import footbpartner1 from '../../../public/images/football/partner/footb-partner1.png'
import footbpartner2 from '../../../public/images/football/partner/footb-partner2.png'
import footbpartner3 from '../../../public/images/football/partner/footb-partner3.png'
import footbpartner4 from '../../../public/images/football/partner/footb-partner4.png'
import footbpartner5 from '../../../public/images/football/partner/footb-partner5.png'
import footbpartner6 from '../../../public/images/football/partner/footb-partner6.png'
import footbpartner7 from '../../../public/images/football/partner/footb-partner7.png'
import footbpartner8 from '../../../public/images/football/partner/footb-partner8.png'

const Partners = () => {
  return (
    <section id='partners' className='partners-area bg-161616 pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <h2>Brand Partners</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>

        <div className='row justify-content-center'>
          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner1} alt='image' />
                </div>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner2} alt='image' />
                </div>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner3} alt='image' />
                </div>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner4} alt='image' />
                </div>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner5} alt='image' />
                </div>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner6} alt='image' />
                </div>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner7} alt='image' />
                </div>
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-4 col-md-4 col-6'>
            <div className='single-partners-box'>
              <Link href='#'>
                <div className='img'>
                  <Image src={footbpartner8} alt='image' />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Partners
