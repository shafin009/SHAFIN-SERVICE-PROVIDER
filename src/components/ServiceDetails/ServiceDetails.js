import React from 'react';
import { Link } from 'react-router-dom';




const ServiceDetails = (props) => {

    const { description, name, image, price } = props.doctor;

    return (
        <div>
            <div className="col">
                <div className="card h-100">
                    <img src={image} className="card-img-top rounded-3 w-auto h-50 p-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"><span className="fw-bold">Reviewed By:</span> {name}</h5>
                        <p className="card-text"><span className="fw-bold">Review:</span> {description}</p>
                        <hr />
                        <p className="card-text"><span className="fw-bold">Ratings:</span> {price}</p>
                        <Link to=''><button type="button" class="btn btn-success w-50 mx-auto d-block">Booking</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;