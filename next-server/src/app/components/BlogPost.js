import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BlogPost = () => {
  return (
    <section id='news' className='blog-area pt-100 pb-70'>
      <div className='container'>
        <div className='section-title'>
          <h2>Latest News</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>
        </div>

        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='single-blog-post'>
              <div className='post-image'>
                <div className='img'>
                  <Image
                    src='/images/football/blog/footb-blog1.jpg'
                    alt='image'
                    width={750}
                    height={500}
                  />
                </div>
                <Link href='/football-single-blog'>
                  {/* <a target="_blank" className="link-btn"></a> */}
                </Link>
              </div>

              <div className='post-content'>
                <ul className='post-meta'>
                  <li>
                    <Link href='#'>Champions League</Link>
                  </li>
                  <li>20 April, 2020</li>
                </ul>

                <h3>
                  <Link href='/football-single-blog'>
                    Ogbonna blasts 'lax' virus response
                  </Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href='/football-single-blog'>Read More</Link>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6'>
            <div className='single-blog-post'>
              <div className='post-image'>
                <div className='img'>
                  <Image
                    src='/images/football/blog/footb-blog2.jpg'
                    alt='image'
                    width={750}
                    height={500}
                  />
                </div>
                <Link href='/football-single-blog'>
                  {/* <a target='_blank' className='link-btn'></a> */}
                </Link>
              </div>

              <div className='post-content'>
                <ul className='post-meta'>
                  <li>
                    <Link href='#'>Premier League</Link>
                  </li>
                  <li>19 April, 2020</li>
                </ul>

                <h3>
                  <Link href='/football-single-blog'>
                    Liverpool title will be special
                  </Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href='/football-single-blog' className='read-more-btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className='col-lg-4 col-md-6 offset-lg-0 offset-md-3'>
            <div className='single-blog-post'>
              <div className='post-image'>
                <div className='img'>
                  <Image
                    src='/images/football/blog/footb-blog3.jpg'
                    alt='image'
                    width={750}
                    height={500}
                  />
                </div>
                <Link href='/football-single-blog'>
                  {/* <a target='_blank' className='link-btn'></a> */}
                </Link>
              </div>

              <div className='post-content'>
                <ul className='post-meta'>
                  <li>
                    <Link href='#'>Football</Link>
                  </li>
                  <li>18 April, 2020</li>
                </ul>

                <h3>
                  <Link href='/football-single-blog'>
                    Moyes self-isolating as precaution
                  </Link>
                </h3>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link href='/football-single-blog' className='read-more-btn'>
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogPost
