import React from 'react';
import { Helmet } from 'react-helmet-async';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home -Car Service Xpert</title>
            </Helmet>
            <Banner></Banner>
            <Services></Services>
            <Experts></Experts>
        </>
    );
};

export default Home;