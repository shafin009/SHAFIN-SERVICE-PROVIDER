import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';





const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2 fs-1'>Please Login</h2>
            <br />
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" placeholder="Email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="btn btn-outline-success w-50 mx-auto d-block" type="submit">
                    Log In
                </Button>
                <p>New to Doctor's Time? <Link to="/signup" className='text-primary pe-auto text-decoration-none' >Please Register</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
            </Form>
        </div>
    );
};

export default Login;