import React from 'react';
import { Container, Row, Col, Form, FloatingLabel, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Contact.css'

const Contact = () => {
    const map = <FontAwesomeIcon icon={faMapMarkerAlt}
        className="map-icon" />
    const mail = <FontAwesomeIcon icon={faEnvelope}
        className="mail-icon" />
    return (
        <Container fluid className="mt-5 pb-5">

            <Row xs={1} md={3}>
                <Col md={2}></Col>

                <Col md={8}>
                    <div className="contact-form">
                        <Row xs={1} md={2}>
                            <Col xs={10} md={4}>
                                <div className="contact-us ps-3">
                                    <p className="text-white text-start">Contact Us</p>
                                    <p className="text-white text-start join">{map}  dhanmondhi 32,Dhaka,Bangladesh</p>
                                    <p className="text-white text-start join">Shop no 12, floor 2nd ,Basundhara Shopping ComplexDhaka,Bangladesh</p>
                                    <p className="text-white text-start join">{mail} eyesshades@420.com</p>
                                </div>

                            </Col>
                            <Col xs={10} md={4}>
                                <div className="get-touch ">
                                    <p className="text-primary text-start">Get in touch</p>
                                    <Form className="">
                                        <Form.Group className=" mt-3 mb-3" controlId="formGroupEmail">

                                            <Form.Control type="email" placeholder="Enter name" />
                                        </Form.Group>
                                        <Form.Group className=" mt-3 mb-3" controlId="formGroupEmail">

                                        <Form.Control type="email" placeholder="Enter email" />
                                    </Form.Group>
                                        <Form.Group className=" mt-3 mb-3" controlId="formGroupEmail">

                                            <Form.Control type="email" placeholder="Enter subject" />
                                        </Form.Group>
                                        <FloatingLabel controlId="floatingTextarea" label="Message" className="mb-3">
                                            <Form.Control as="textarea" placeholder="Leave a comment here" />
                                        </FloatingLabel>
                                        <Button variant="primary" size="sm" type="submit" className="w-50 mx-auto mb-3">Send Message</Button>
                                    </Form>

                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={2}></Col>

            </Row>


        </Container>
    );
};

export default Contact;