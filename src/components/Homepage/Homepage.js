import React from 'react'
import { Link } from 'react-router-dom';
import Banner from './BannerPic/banner1.jpg'
import Banner2 from './BannerPic/banner2.jpg'
import Banner3 from './BannerPic/banner3.jpg'


import { Carousel } from 'react-bootstrap';



const Homepage = () => {




  return (

    <div>

      <div className="d-block">
        <Carousel>
          <Carousel.Item>
            <img

              className="d-block w-100"
              src={Banner}
              alt="First slide"
            />

          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner2}
              alt="Second slide"
            />


          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block selection:w-100"
              src={Banner3}
              alt="Third slide"
            />

          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <h1 className='text-center text-4xl font-serif underline text-stone-700'>Our Services</h1>
      <br />
      <div className='container d-flex justify-content-between'>
        <div className='row row-cols-1 row-cols-md-3 g-4'>


        </div>
      </div>
      <br />
      <br />
      <br />

      <Link to='/services'><button className="btn btn-success d-grid gap-2 col-6 mx-auto" >See All Doctor</button>
      </Link>

    </div >

  );
}

export default Homepage;
