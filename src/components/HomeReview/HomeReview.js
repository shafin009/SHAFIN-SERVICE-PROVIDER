import React from 'react';
import { useNavigate } from 'react-router-dom';




const HomeReview = (props) => {

    const { description, name, image, price } = props.doctor;

    const Navigate = useNavigate()

    const BookingPage = () => {

        Navigate('/booking')

    }

    return (
        <div>
            <div className="col">
                <div className="card">
                    <img src={image} className="card-img-top mx-auto d-block w-75" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><span className="fw-bold">Name:</span> {name}</h5>
                        <p className="card-text"><span className="fw-bold">Description:</span> {description}</p>
                        <hr />
                        <p className="card-text"><span className="fw-bold">Fees:</span> ${price}</p>
                        <button type="button" class="btn btn-outline-success w-50 mx-auto d-block" onClick={() => BookingPage()}>Booking</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeReview;