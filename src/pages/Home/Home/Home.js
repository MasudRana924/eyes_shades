import React from 'react';
import Banner from '../Banner/Banner';
import GetReviews from '../GetReviews/GetReviews';
import Offer from '../Offer/Offer';
import Service from '../Service/Service';
import Sunglasses from '../Sunglasses/Sunglasses';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Sunglasses></Sunglasses>
            <Offer></Offer>
            <GetReviews></GetReviews>
            <Service></Service>
            
        </div>
    );
};

export default Home;