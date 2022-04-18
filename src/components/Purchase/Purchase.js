import React from 'react';
import { useNavigate } from 'react-router-dom';
import purchase from './purchase.jpg'

const Purchase = () => {

    const Navigate = useNavigate()

    const purchaseCheaked = () => {


        Navigate('/proceed')
    }



    return (
        <div>
            <br />
            <div className="text-center">
                <img src={purchase} className="rounded w-25 mx-auto d-block" alt="..." />
            </div>
            <h1 className='text-center text-4xl font-serif underline text-stone-700'>Fillup This Form</h1>
            <form className="row g-3 container w-50 mx-auto">
                <div className="col-md-6">
                    <label for="inputEmail4" className="form-label">Your Full Name</label>
                    <input type="email" className="form-control" id="inputEmail4" placeholder="Enter Your Full Name" required />
                </div>
                <div className="col-12">
                    <label for="inputAddress" className="form-label">Your Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Enter Address" required />
                </div>
                <div className="col-12">
                    <label for="inputAddress2" className="form-label">Your Debit Card no.. </label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Enter Debit Card no.." required />
                </div>
                <div className="col-md-6">
                    <label for="inputState" className="form-label">Country</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>Bangladesh</option>
                        <option>China</option>
                        <option>India</option>
                        <option>USA</option>
                        <option>Australia</option>
                        <option>France</option>
                        <option>South Africa</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label for="inputState" className="form-label">City</label>
                    <select id="inputState" className="form-select">
                        <option selected>Choose...</option>
                        <option>New Delhi</option>
                        <option>Dhaka</option>
                        <option>Beijing</option>
                        <option>Washington</option>
                        <option>Sydney</option>
                        <option>Paris</option>
                        <option>Pretoria</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label for="inputZip" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="inputZip" required />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck" required />
                        <label className="form-check-label" for="gridCheck">
                            Check me out
                        </label>
                    </div>
                </div>
                <div className="col-12">
                    <button type="submit" onClick={() => purchaseCheaked()} className="btn btn-outline-primary w-50 mx-auto d-block">Proceed</button>
                </div>
            </form>
        </div>
    );
};

export default Purchase;