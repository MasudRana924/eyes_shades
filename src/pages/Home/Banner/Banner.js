import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner from '../../../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Container fluid className="banner ">
             <Link to="/home">
             <img src={banner} className="image-banner" alt="" />
             </Link>
        </Container>
    );
};

export default Banner;