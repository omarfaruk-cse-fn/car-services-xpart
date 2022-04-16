import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div className='container w-50 mx-auto mt-2'>
            <h2>Service Details {serviceId}</h2>
            <Link to='/checkout'>
                <Button className='btn btn-primary'>Proceed Checkout</Button>
            </Link>
        </div>
    );
};

export default ServiceDetail;