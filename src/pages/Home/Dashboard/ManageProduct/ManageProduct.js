import React, { useState } from 'react';
import { Col, Button } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';


const ManageProduct = (props) => {
    const { _id, name, img, price, star, sale, stock } = props.glass

    return (
        <Col className="mt-5">
            <div className="card-style">


                <div className="price-rating">
                    <p className="sale">{sale}% off</p>
                    <p className="stock">{stock}</p>
                </div>
                <img src={img} className="image" alt="" />

                <div>
                <Rating
                    initialRating={star}
                    emptySymbol="far fa-star rating"
                    fullSymbol="fas fa-star rating"
                    readonly ></Rating>

                </div>
                <div className="price-rating mt-1">

                    <p className="name">{name}</p>
                    <p className="price">${price}</p>
                </div>
                
                <div className="price-rating">
                    <Link to={`${_id}`}>
                        <Button  variant="warning" size="sm"> Update</Button>
                    </Link>
                    <Button onClick={() =>props.handleDelete(props.glass._id)} variant="danger" size="sm"> Delete</Button>

                </div>
            </div>
        </Col>
    );
};

export default ManageProduct;