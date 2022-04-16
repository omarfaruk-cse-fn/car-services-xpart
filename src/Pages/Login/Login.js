import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    let errorElement;
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const navigate = useNavigate()
    const location = useLocation()

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading || sending) {
        return <Loading></Loading>
    }

    const from = location.state?.from?.pathname || '/'

    if (user) {
        navigate(from, { replace: true })
    }

    if (error) {
        errorElement = (

            <p className='text-danger'>Error: {error?.message}</p>

        );
    }

    const handleLoginEvent = event => {
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)
    }

    const resetPassword = async () => {
        const email = emailRef.current.value
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent email');
        }
        else {
            toast('please enter your email address')
        }
    }

    const navigateRegister = event => {
        navigate('/register')
    }

    return (
        <div className='container w-50 mx-auto mt-4'>
            <h2 className='text-primary text-center'>Please Login</h2>
            <Form onSubmit={handleLoginEvent}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>

                <Button className='mb-2' variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New There?
                <Link to='/register' className='text-primary pe-auto text-decoration-none' onClick={navigateRegister}>
                    Please Register
                </Link>
            </p>

            <p>Forget password?
                <button className=' btn btn-link text-primary pe-auto text-decoration-none' onClick={resetPassword}>
                    Reset password
                </button>
            </p>
            <SocialLogin></SocialLogin>
            <ToastContainer />
        </div>
    );
};

export default Login;