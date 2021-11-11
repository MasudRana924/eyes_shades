import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import MyOrders from './MyOrders/MyOrders';
const Dashboard = () => {
    return (
        <Container fluid className="mt-5">
            <Row xs={1} md={2}>
                <Col xs={12} md={4} className="admin-panel">
                    <h2 className="text-primary dashboard">DashBoard</h2>
                   
                    <Link to="/orders" className="text-decoration-none">
                        <h6 className="text-start">My Orders</h6>
                    </Link>
                    <Link className="text-decoration-none">
                        <h6 className="text-start">Review</h6>
                    </Link>
                    <Link className="text-decoration-none">
                        <h6 className="text-start">Payment</h6>
                    </Link>
                    <Link className="text-decoration-none">
                        <h6 className="text-start">LogOut</h6>
                    </Link>

                </Col>

                <Col xs={12} md={8}>
                    <MyOrders></MyOrders>
              

                </Col>

            </Row>


        </Container>
    );
};

export default Dashboard;