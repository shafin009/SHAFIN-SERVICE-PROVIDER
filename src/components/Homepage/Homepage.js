import React from 'react'
import { Link } from 'react-router-dom';
import Banner1 from './BannerPic/banner1.jpg'
import Banner2 from './BannerPic/banner2.jpg'
import Banner3 from './BannerPic/banner3.jpg'
import card1 from './CardPic/card.png'
import card2 from './CardPic/card2.png'
import card3 from './CardPic/card3.png'
import card4 from './CardPic/card4.png'
import useProvider from '../../Hooks/useProvider';
import { Carousel } from 'react-bootstrap';
import HomeReview from '../HomeReview/HomeReview';




const Homepage = () => {

  const [providers, setProviders] = useProvider()


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
      <h1 className='text-center text-4xl font-serif underline text-stone-700'>My Speciality</h1>
      <br />
      <div className="container row row-cols-1 row-cols-md-2 g-4">
        <div className="col">
          <div className="card">
            <img src={card1} className="card-img-top mx-auto d-block w-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">Plumbing</h5>
              <p className="card-text ">
                <li>Faucets and Sinks</li>
                <li>Toilets</li>
                <li>Showers and Tubs</li>
                <li>Pipes and Valves</li>
                <li>Sump Pumps</li>
                <li>Water Heaters</li>
                <li>Dryer Vent Cleaning</li>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={card2} className="card-img-top mx-auto d-block w-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">Electrical</h5>
              <p className="card-text">
                <li>Bath Fans and Vents</li>
                <li>Garbage Disposals</li>
                <li>Light Switches and Dimmers</li>
                <li>Outlet and GFI</li>
                <li>Light Fixtures and Ceiling Fans</li>
                <li>TV Mounting and Sound bar</li>
                <li>Holiday Lighting Installations</li>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={card3} className="card-img-top mx-auto d-block w-50 " alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">Carpentry</h5>
              <p className="card-text">
                <li>Decks and Railings</li>
                <li> Stairs and Balusters</li>
                <li> Wood and Metal Framing</li>
                <li>Crown Molding</li>
                <li> Door and Window Trim</li>
                <li>Siding Installation</li>
                <li>Gutters and Downspouts</li>
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img src={card4} className="card-img-top d-block mx-auto w-50" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center fw-bold text-decoration-underline">Painting</h5>
              <p className="card-text">
                <li>Drywall Patching, Plastering</li>
                <li>Walls, Ceilings and Trim</li>
                <li>Cabinets Painting</li>
                <li>Caulking and Insulating</li>
                <li>Fences and Decks</li>
                <li>Staining and Polyurethaning</li>
                <li>Historical Restorations</li>
              </p>
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
          providers.slice(0, 3).map(provider => <HomeReview
            key={provider.id}
            provider={provider}

          ></HomeReview>)
        }

      </div>
      <br />
      <Link to='/services'><button className="btn btn-success d-grid gap-2 col-6 mx-auto" >See All Services</button>
      </Link>
      <br />
      <div className="card">
        <div className="card-header">
          What's my customer say about me
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <p>If you are not sure, always go for Shafin service provider. Thank you for making it painless, pleasant and most of all hassle free!</p>
            <br />
            <footer className="blockquote-footer">Janice Alina <cite title="Source Title">California,USA.</cite></footer>
          </blockquote>
        </div>
      </div>

    </div >

  );
}

export default Homepage;
