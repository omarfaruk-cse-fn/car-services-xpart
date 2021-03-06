import React from 'react';
import google from '../../../images/google.png'
import facebook from '../../../images/facebook.png'
import github from '../../../images/github.png'
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
const SocialLogin = () => {
    let errorElement;
    const navigate = useNavigate()
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const location = useLocation()

    let from = location.state?.from?.pathname || '/'

    if (loading || loading1) {
        return <Loading></Loading>
    }

    if (error || error1) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        );
    }

    if (user || user1) {
        navigate(from, { replace: true })
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '30px' }} src={google} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>
                <button className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '36px' }} src={facebook} alt="" />
                    <span className='px-2'>Facebook sign in</span>
                </button>
                <button
                    onClick={() => signInWithGithub()}
                    className='btn btn-info w-50 d-block mx-auto my-2'>
                    <img style={{ width: '26px' }} src={github} alt="" />
                    <span className='px-2'>Google sign in</span>
                </button>
            </div>
        </div>


    );
};

export default SocialLogin;