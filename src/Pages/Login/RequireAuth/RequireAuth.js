import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [user, loading, error] = useAuthState(auth);
    const [sendEmailVerification, sending] = useSendEmailVerification(auth);
    const location = useLocation()
    if (loading) {
        return <Loading></Loading>
    }
    if (user?.providerData[0]?.providerId === 'password' && !user?.emailVerified) {
        return <div className='container text-center mx-auto p-3 mt-3'>
            <h3 className='text-danger'>Your email is not verified !!</h3>
            <h5 className='text-success'> Please verify your email address</h5>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    toast('Sent email');
                }}
            >
                Verify email
            </button>
            <ToastContainer></ToastContainer>
        </div>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
};

export default RequireAuth;