import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SignUp = () => {



    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2 fs-1'>Please SignUp</h2>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="name" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Confirm Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="btn btn-outline-success w-50 mx-auto d-block" type="submit">
                    Sign Up
                </Button>
                <p>Already Have an Account ? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Login</Link> </p>
            </Form>
        </div>
    );
};

export default SignUp;