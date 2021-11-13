import React from 'react';
import { Col } from 'react-bootstrap';
import Rating from 'react-rating';
import useAuth from '../../../Hooks/useAuth';

const GetReview = (props) => {
    const { user } = useAuth()
    const { name, review, rating } = props.review
    return (
        <Col className="mt-5">
            <div className="card-style">

                <img src={user.src} className="image" alt="" />
                <Rating
                    initialRating={rating}
                    emptySymbol="far fa-star rating"
                    fullSymbol="fas fa-star rating"
                    readonly ></Rating>
                <p className="name text-center">{name}</p>
                
                <p className=" text-start" style={{fontSize:'15px'}}>{review}</p>





            </div>
        </Col>
    );
};

export default GetReview;