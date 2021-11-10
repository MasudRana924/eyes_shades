import React from 'react';
import { Col, Container, Dropdown, DropdownButton, Nav, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faYoutube, faApple, faGooglePlay } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import './Footer.css'

const Footer = () => {
    const apple = <FontAwesomeIcon icon={faApple} className="apple-icon " />
    const playstore = <FontAwesomeIcon icon={faGooglePlay}
        className="play-icon " />
    const map = <FontAwesomeIcon icon={faMapMarkerAlt}
        className="map-icon" />
    const mail = <FontAwesomeIcon icon={faEnvelope}
        className="mail-icon" />

    return (
        <Container fluid className="mt-5 footer pb-5">
            <div>
                <Row xs={3} md={3}>
                    <Col className="mt-1">
                        <p className="text-white text-start">Contact Us</p>
                        <p className="text-secondary text-start join">{map}  dhanmondhi 32,Dhaka,Bangladesh</p>
                        <p className="text-secondary text-start join">Shop no 12, floor 2nd ,Basundhara Shopping ComplexDhaka,Bangladesh</p>
                        <p className="text-secondary text-start join">{mail} eyesshades@420.com</p>
                    </Col>
                    <Col className="mt-1">

                        <div className="w-50 mx-auto user-details">
                            <h4 className="text-start text-white">My Account</h4>
                            <p className="text-start text-secondary">My account</p>
                            <p className="text-start text-secondary">My address</p>

                            <p className="text-start text-secondary">Helps & Support</p>
                            <p className="text-start text-secondary">LogOut</p>
                        </div>



                    </Col>
                    <Col className="mt-1">
                        <h4 className="text-start text-white">Join With Us</h4>

                        <p className="text-start text-secondary join">Get E-mail updates about our latest shop and special offers.</p>
                        <input type="text" placeholder="Enter Email" className="input " />
                        <input type="submit" value="Subscribed" className="input-btn "/>
                        
                         <br />
                        <FontAwesomeIcon icon={faFacebook} className="fb-icon mt-3" />
                        <FontAwesomeIcon icon={faInstagram} className="insta-icon ms-3 mt-3" />
                        <FontAwesomeIcon icon={faYoutube} className="youtube-icon ms-3 mt-3" />
                        <FontAwesomeIcon icon={faGoogle} className="google-icon ms-3 mt-3" />
                    </Col>
                </Row>
            </div>
            <div className="">
                <Row xs={1} md={2}>
                    <Col md={6} className="">
                        <p className="text-center w-100 text-secondary">copyright © design in 2021 by
                            <a href="https://github.com/MasudRana924" target="_blank" rel="noopener noreferrer" className="text-decoration-none text-primary"> Masud Rana </a>
                        </p>

                    </Col>
                    <Col md={6} className="">
                        <div>
                            <span> <button className="btn-app"> <span>{apple}</span> <span>Apple Store</span></button> </span>
                            <span> <button className="btn-app"> <span>{playstore}</span> <span>Google Play</span></button> </span>
                        </div>
                    </Col>
                </Row>


            </div>


        </Container>
    );
};

export default Footer;