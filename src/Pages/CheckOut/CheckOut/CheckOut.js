import React from 'react';
import { useParams } from 'react-router-dom';
import useServiceDetail from '../../ServiceDetail/useServiceDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    const [user] = useAuthState(auth);
    const handlePlaceOrder = event => {
        event.preventDefault()
        const order = {
            email: user.email,
            name: user.displayName,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phoneNumber.value

        }
        axios.post('https://whispering-brushlands-37507.herokuapp.com/order', order)
            .then(response => {
                const { data } = response
                if (data.insertedId) {
                    toast('Your order is booked!!!')
                    event.target.reset()
                }
            })
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName} name="name" placeholder='Name' id="" required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="email" value={user?.email} name="email" placeholder='Email' id="" required readOnly disabled />
                <br />
                <input className='w-100 mb-2' type="service" value={service.name} name="serviceName" placeholder='Service Name' id="" required />
                <br />
                <input className='w-100 mb-2' type="text" name="address" placeholder='Address' id="" required />
                <br />
                <input className='w-100 mb-2' type="number" name="phoneNumber" placeholder='Phone Number' id="" required />
                <br />
                <input className='btn btn-primary' type="submit" name='submit' value="Please Order" />
            </form>
        </div>
    );
};

export default CheckOut;