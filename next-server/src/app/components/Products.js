import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// image imports
import footbproduct1 from '../../../public/images/football/products/footb-product1.jpg'
import footbproduct2 from '../../../public/images/football/products/footb-product2.jpg'
import footbproduct3 from '../../../public/images/football/products/footb-product3.jpg'
import footbproduct4 from '../../../public/images/football/products/footb-product4.jpg'

const Products = () => {
  return (
    <section id='shop' className='products-area pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <h2>Plaon Shop</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-sm-6'>
            <div className='single-products-box'>
              <div className='img'>
                <Image src={footbproduct1} alt='image' />
              </div>

              <div className='content'>
                <h3>Kreton Footwear</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
                <Link href='#' className='shop-now-btn'>
                  Shop Now
                </Link>
              </div>

              <Link href='#' className='link-btn'>
                {/* <a target='_blank' className='link-btn'></a> */}
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='single-products-box'>
              <div className='img'>
                <Image src={footbproduct2} alt='image' />
              </div>

              <div className='content'>
                <h3>Kreton Denim</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>

                <Link href='#' className='shop-now-btn'>
                  Shop Now
                </Link>
              </div>

              <Link href='#' className='link-btn'>
                {/* <a target='_blank' className='link-btn'></a> */}
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='single-products-box'>
              <div className='img'>
                <Image src={footbproduct3} alt='image' />
              </div>

              <div className='content'>
                <h3>Kreton Underwear</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>

                <Link href='#' className='shop-now-btn'>
                  Shop Now
                </Link>
              </div>

              <Link href='#' className='link-btn'>
                {/* <a target='_blank'></a> */}
              </Link>
            </div>
          </div>

          <div className='col-lg-3 col-sm-6'>
            <div className='single-products-box'>
              <div className='img'>
                <Image src={footbproduct4} alt='image' />
              </div>

              <div className='content'>
                <h3>Kreton Fragrances</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>

                <Link href='#' className='shop-now-btn'>
                  Shop Now
                </Link>
              </div>

              <Link href='#' className='link-btn'>
                {/* <a target='_blank' className='link-btn'></a> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products
