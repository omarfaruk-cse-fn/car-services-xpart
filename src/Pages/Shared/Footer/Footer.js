import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='text-center p-5'>
            <small >all solved and copyright ©Omar {year}</small>
        </div>
    );
};

export default Footer;