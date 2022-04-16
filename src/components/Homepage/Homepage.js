import React from 'react'
import { Link } from 'react-router-dom';



import { Carousel } from 'react-bootstrap';



const Homepage = () => {




  return (

    <div>

      <div className="d-block">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-75"
              src={''}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Welcome to Doctor's Time</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-75"
              src={''}
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Welcome to Doctor's Time</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block mx-auto w-75"
              src={''}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Welcome to Doctor's Time</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
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
