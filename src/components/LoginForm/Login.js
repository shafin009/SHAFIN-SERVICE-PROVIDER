import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import login from './login.jpg'


const Login = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    let errorDiv;
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, Send] = useSendPasswordResetEmail(auth);

    if (loading || Send) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorDiv = <p className='text-danger'>Error: {error?.message}</p>
    }

    const submitForm = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Reset Mail Sent! Cheak your Mailbox');
        }
        else {
            toast('Please Enter your E-mail');
        }
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2 fs-1'>Login</h2>
            <br />
            <div className="text-center">
                <img src={login} className="rounded w-75 mx-auto d-block" alt="..." />
            </div>
            <br />
            <Form onSubmit={submitForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control ref={emailRef} type="email" placeholder="Email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button variant="btn btn-outline-success w-50 mx-auto d-block" type="submit">
                    Log In
                </Button>
                {errorDiv}
                <p>New to Doctor's Time? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>Reset Password</button> </p>
            </Form>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;