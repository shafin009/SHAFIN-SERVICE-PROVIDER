import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom'
import auth from '../../firebase.init';
import Loading from '../../Hooks/Loading';

const SocialLogin = () => {



    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const Navigate = useNavigate()
    let errorDiv;
    if (loading) {
        return <Loading></Loading>
    }
    if (error) {
        errorDiv = <div>
            <p className='text-danger'>Error: {error?.message}</p>
        </div>

    }
    if (user) {
        Navigate('/')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-black w-50'></div>
            </div>
            {errorDiv}
            <div className=''>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-danger w-50 d-block mx-auto my-2'>

                    <span className='px-2'>Google Sign In</span>
                </button>

            </div>

        </div >
    );
};

export default SocialLogin;