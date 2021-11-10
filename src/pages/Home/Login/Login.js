import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import './Login.css'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Login = () => {

    const google = <FontAwesomeIcon icon={faGoogle} />
    return (
        <Container fluid className="mt-5 pt-5 pb-5 ">
            <Row xs={1} md={3}>
                <Col md={4}></Col>
                <Col md={4}>
                    <div className="login-card pb-5">
                        <form action="" className="login-form mt-5">
                            
                            <input type="text" placeholder="Enter your email" />
                            <input type="password" placeholder="Enter your password" />
                           
                            <input type="submit" value="Log-in" className="submit w-75" />
                        </form>
                        <p className="">Don't have an account ? <Link to="/signup" className="text-decoration-none create">create a account  </Link></p>
                        <br />
                        <span>OR</span>
                        <br />
                        <button className="log-in-button mt-3 mb-3 w-75">
                            <span className="gogle-icon me-1">
                                {google}
                            </span> <span className="google">Continue with Google </span> </button>

                    </div>
                </Col>
                <Col md={4}></Col>
            </Row>
        </Container>
    );
};

export default Login;