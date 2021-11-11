import React from 'react';
import { Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Sunglass.css'

const Sunglass = (props) => {
    const {_id, name, img, price, star,sale,stock} = props.glass
    const cart = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <Col className="mt-5">
            <div className="card-style">

                
                    <div className="price-rating">
                        <p className="sale">{sale}% off</p>
                        <p className="stock">{stock}</p>
                    </div>
                    <img src={img} className="image" alt="" />
               
            
                <div className="price-rating mt-1">
              
                    <p className="name">{name}</p>
                    <p className="price">${price}</p>
                </div>


                <div className="price-rating">
                    <Link to={`/details/${_id}`}>
                        <Button variant="warning" size="sm">{cart} Purchase</Button>
                    </Link>
                    <p className="price">{star}/5</p>
                </div>


            </div>
        </Col>
    );
};

export default Sunglass;