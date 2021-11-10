import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../../images/01.jpg'
import imgTwo from '../../../images/02.jpg'
import './Offer.css'
const Offer = () => {
    return (
        <Container fluid className="mt-5">


            <Row xs={1} md={2}>
            <Col >
            <img src={img} className="img-offer" alt="" />

            </Col>
            <Col >
            <img src={imgTwo} className="img-offer" alt="" />

            </Col>
            </Row >
        </Container>
       

    );
};

export default Offer;