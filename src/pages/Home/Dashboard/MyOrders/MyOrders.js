import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import useAuth from '../../../../Hooks/useAuth';
import './MyOrders.css'
const MyOrders = () => {
    const { user } = useAuth()
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
        <Container fluid >

            {/* <div className=" form">
                <div className="d-flex ">
                    <div className="info-name ">
                        <h6 className=" text-primary">Image</h6>
                    </div>
                    <div className="info-name ">
                        <h6 className=" text-primary">Name</h6>
                    </div>
                    <div className="info-email ">
                        <h6 className=" text-primary">Email</h6>
                    </div>
                    <div className="info-phone ">
                        <h6 className=" text-primary">Phone</h6>
                    </div>
                    <div className="info-address ms-1 ">
                        <h6 className=" text-primary">Address</h6>
                    </div>
                    <div className="info-city ">
                        <h6 className=" text-primary">City</h6>
                    </div>
                    <div className="delete ">
                        <h6 className=" text-primary">Delete</h6>
                    </div>
                </div>

                : {
                    orders.map(order =>


                        <div className="d-flex mt-3 ">

                            <div className="info-name">

                                <p className="">{order.name}</p>
                            </div>
                            <div className="info-email">
                                <p className="">{order.email}</p>
                            </div>
                            <div className="info-phone">
                                <p >{order.phone}</p>

                            </div>
                            <div className="info-address ms-3">
                                <p >{order.address}</p>
                            </div>
                            <div className="info-city">
                                <p >{order.city}</p>
                            </div>
                            <div className="delete">
                                <button className="delete-button">
                                    <FontAwesomeIcon icon={faTrashAlt} className="fs-3 text-danger" />
                                </button>

                            </div>
                        </div>
                    )




                }


            </div> */}

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
                            <tr className="bg-white">
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

        </Container>
    );
};

export default MyOrders;