import React from 'react';
import slepping from '../../../images/slepping.jpg'

const NotFound = () => {
    return (
        <div>

            <h2 className='text-danger text-center p-2'>404 </h2>
            <h3 className='text-primary text-center p-2'>Mechanic is slipping</h3>

            <img className='w-100' src={slepping} alt="" />
        </div>
    );
};

export default NotFound;