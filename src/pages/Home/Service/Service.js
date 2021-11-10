import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShippingFast,faPercentage } from '@fortawesome/free-solid-svg-icons'
import './Service.css'

const Service = () => {
    const shipping = <FontAwesomeIcon icon={faShippingFast} />
    const offer = <FontAwesomeIcon icon={faPercentage} />
    return (
       <Container fluid className="mt-5">
           <Row xs={1} md={3} className="service">
               <Col md={3}>
               <p>{shipping} FREE SHIPPING</p>
                
               </Col>
               <Col md={6}>
               <p>Free Delivery Now On Your First Order and over $200</p>
               </Col>
               <Col md={3}>
                   <p>{offer}10 off for Golden Member</p>
               </Col>
              
           </Row>

       </Container>
    );
};

export default Service;