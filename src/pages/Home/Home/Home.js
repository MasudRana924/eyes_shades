import React from 'react';
import Banner from '../Banner/Banner';
import Offer from '../Offer/Offer';
import Service from '../Service/Service';
import Sunglasses from '../Sunglasses/Sunglasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sunglasses></Sunglasses>
            
            <Offer></Offer>
            <Service></Service>
            
        </div>
    );
};

export default Home;