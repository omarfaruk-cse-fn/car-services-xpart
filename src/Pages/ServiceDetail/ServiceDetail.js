import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from './useServiceDetail';


const ServiceDetail = () => {
    const { serviceId } = useParams()
    const [service] = useServiceDetail(serviceId)
    return (
        <div className='container w-50 mx-auto mt-2'>
            <h5>You Are About To Book {service.name}</h5>
            <Link to={`/checkout/${serviceId}`}>
                <Button className='btn btn-primary'>Proceed Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;