import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';
import Loading from '../../Shared/Loading/Loading';

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);



    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('/login')
    }

    if (loading || updating) {
        return <Loading></Loading>
    }

    const handleRegister = async (event) => {

        event.preventDefault()
        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
        alert('Updated profile');
        navigate('/home')
    }


    if (user) {
        console.log('user', user)
    }
    return (
        <div className='mx-auto'>
            <h2 className='text-primary text-center mt-2'>Please Register!!</h2>
            <Form onSubmit={handleRegister} className='container mx-auto w-50'>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='terms' id='terms' className={`ps-2 ${agree ? 'text-success' : 'text-danger'}`} label="Accept terms and condition?" />
                </Form.Group>
                <Button disabled={!agree} className='mt-1' variant="primary" type="submit" >
                    Register
                </Button>

            </Form>
            <p className='text-center'>Already Register?
                <Link to='/login' className='text-primary pe-auto text-decoration-none' onClick={handleLogin}>
                    Login
                </Link>
            </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;