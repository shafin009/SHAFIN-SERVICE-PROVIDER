import React from 'react'
import { Link } from 'react-router-dom';
import Banner1 from './BannerPic/banner1.jpg'
import Banner2 from './BannerPic/banner2.jpg'
import Banner3 from './BannerPic/banner3.jpg'
import card1 from './CardPic/card.png'
import card2 from './CardPic/card2.png'
import card3 from './CardPic/card3.png'
import card4 from './CardPic/card4.png'
import useDoctor from '../../Hooks/useDoctor';
import { Carousel } from 'react-bootstrap';
import HomeReview from '../HomeReview/HomeReview';



const Homepage = () => {

  const [doctors, setDoctors] = useDoctor()


  return (

    <div>

      <div className="d-block">
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Banner1}
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
      <h1 className='text-center text-4xl font-serif underline text-stone-700'>Our Speciality</h1>
      <br />
      <div className="container row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={card1} className="card-img-top mx-auto d-block w-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">General Physician</h5>
              <p className="card-text">Cold, flu, fever, vomiting, infections, headaches or any other general health issues.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={card2} className="card-img-top mx-auto d-block w-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">Pediatrics</h5>
              <p className="card-text">Any children's health related issues including physical, behavior and mental health.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={card3} className="card-img-top mx-auto d-block w-50 " alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">Covid Unit</h5>
              <p className="card-text">Symptoms, Prevention, Travel Advice, Vaccines, Common FAQs, and treatment of diagnosis related to Covid-19.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={card4} className="card-img-top d-block mx-auto w-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">Cardiology</h5>
              <p className="card-text">Diagnosis, treatment of congenital heart defects, coronary artery disease, heart failure, and valvular heart disease.</p>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      <h1 className='text-center text-4xl font-serif underline text-sky-700'>Here Some Services</h1>
      <br />
      <div className='container row row-cols-1 row-cols-md-3 g-4'>
        {
          doctors.slice(0, 3).map(doctor => <HomeReview
            key={doctor.id}
            doctor={doctor}

          ></HomeReview>)
        }

      </div>
      <br />
      <Link to='/services'><button className="btn btn-success d-grid gap-2 col-6 mx-auto" >See All Doctors</button>
      </Link>

    </div >

  );
}

export default Homepage;
