import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';
import signup from './signup.jpg'

const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const Navigate = useNavigate();



    if (loading || updating) {
        return <Loading></Loading>
    }



    const signUpForm = async (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;


        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        Navigate('/home')
    }


    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-primary text-center mt-2 fs-1'>SignUp Here</h2>
            <br />
            <div className="text-center">
                <img src={signup} className="rounded w-75 mx-auto d-block" alt="..." />
            </div>
            <br />
            <Form onSubmit={signUpForm}>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="name" ref={nameRef} placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control type="email" ref={emailRef} placeholder="Your Email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" ref={passwordRef} placeholder="Password" required />
                </Form.Group>


                <Button variant="btn btn-outline-success w-50 mx-auto d-block" type="submit">
                    Sign Up
                </Button>
                <p>Already Have an Account ? <Link to="/login" className='text-primary pe-auto text-decoration-none' >Login</Link> </p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;