import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Order = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([])
    useEffect(() => {


        const getOrders = async () => {
            const email = user.email
            const url = `https://whispering-brushlands-37507.herokuapp.com/order?email=${email}`
            const { data } = await axios.get(url)
            setOrders(data)
        }
        getOrders()

    }, [user])
    return (
        <div>
            <h3 className='container mx-auto mt-5'>Your Orders : {orders.length} </h3>

        </div>
    );
};

export default Order;