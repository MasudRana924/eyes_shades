import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from './../../../../Hooks/useAuth';

const Payment = () => {
    const { logOut } = useAuth()
    return (
        <Container fluid className="">
            <Row xs={1} md={1}>

                {/* <Col xs={12} md={4} className="admin-panel">
                    <h2 className="text-primary dashboard">DashBoard</h2>

                    <Link to="/orders" className="text-decoration-none">
                        <h6 className="text-start">My Orders</h6>
                    </Link>
                    <Link to="review" className="text-decoration-none">
                        <h6 className="text-start">Review</h6>
                    </Link>
                    <Link to="payment" className="text-decoration-none">
                        <h6 className="text-start">Payment</h6>
                    </Link>
                    <Link className="text-decoration-none">
                    <h6 className="text-start" onClick={logOut}>LogOut</h6>
                    </Link>

                </Col> */}

                <Col xs={12} md={8}>
                    <h2 className=" text-start dashboard" >Payment</h2>
                    <Row xs={1} md={2}>
                        <Col>


                        </Col>
                        <Col></Col>

                    </Row>
                </Col>
            </Row>


        </Container>
    );
};

export default Payment;