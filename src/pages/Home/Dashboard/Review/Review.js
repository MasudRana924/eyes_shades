import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../../Hooks/useAuth';
const Review = () => {
    const {logOut}=useAuth()
    return (
        <Container fluid className="mt-5 pt-5 pb-5">
            <Row xs={1} md={2}>

                <Col xs={12} md={4} className="admin-panel">
                    <h2 className="text-primary dashboard">DashBoard</h2>

                    <Link to="/orders" className="text-decoration-none">
                        <h6 className="text-start">My Orders</h6>
                    </Link>
                    <Link to="/review"className="text-decoration-none">
                        <h6 className="text-start">Review</h6>
                    </Link>
                    <Link to="/payment" className="text-decoration-none">
                        <h6 className="text-start">Payment</h6>
                    </Link>
                    <Link className="text-decoration-none">
                    <h6 className="text-start" onClick={logOut}>LogOut</h6>
                    </Link>

                </Col>

                <Col xs={12} md={8}>
                    <h2 className=" text-start dashboard" >Review</h2>
                    <Row xs={1} md={2}>
                        <Col>
                            <div className="review-card ">
                                <Form>
                                    <Form.Group className="mb-3 text-start" >
                                        <Form.Label>Your name</Form.Label>
                                        <Form.Control type="name" placeholder="Enter name" />

                                    </Form.Group>
                                    <Form.Group className="mb-3 text-start" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Feedback</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>


                                    <Button variant="primary" type="submit" className="w-100 text-center">
                                        Submit
                                    </Button>
                                </Form>

                            </div></Col>
                        <Col></Col>

                    </Row>



                </Col>

            </Row>


        </Container>
    );
};

export default Review;