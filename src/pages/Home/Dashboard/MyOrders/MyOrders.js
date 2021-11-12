import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../Hooks/useAuth';
import './MyOrders.css'
import { Link } from 'react-router-dom';
const MyOrders = () => {
    const { user, logOut } = useAuth()
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `http://localhost:5000/myorders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])
    return (
        <Container fluid className="">

            <Row xs={1} md={1}>

                <Col xs={12} md={8}>
                    <h2 className="text-start dashboard">Orders-list</h2>
                    <Table striped bordered hover variant="white">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Price</th>
                                <th>Delete</th>
                            </tr>

                        </thead>
                        <tbody >
                            {
                                orders.map(order =>
                                    <tr className="">
                                        <td>{order.info.name}</td>
                                        <td>${order.info.price}</td>
                                        <td>
                                            <button className="delete-button">
                                                <FontAwesomeIcon icon={faTrashAlt} className="fs-3 text-danger " />
                                            </button>
                                        </td>

                                    </tr>
                                )}


                        </tbody>
                    </Table>


                </Col>

            </Row>


        </Container>
    );
};

export default MyOrders;