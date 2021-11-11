import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import Sunglass from '../Sunglass/Sunglass';
import './Sunglasses.css'

const Sunglasses = () => {
    const [glasses,setGlasses]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/glasses')
        .then(res=>res.json())
        .then(data=>{
            setGlasses(data.slice(0,6))
        })
    },[])
    return (
        <Container fluid className="mt-3">
            <div className="">
                {glasses.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
                </div>
                    : <Row xs={1} md={3} className="w-75 mx-auto">
                        {
                            glasses.map(glass=><Sunglass
                              key={glass.key}
                              glass={glass}
                            ></Sunglass>)
                        }
                    </Row>
                }
                
            </div>
        </Container>
    );
};

export default Sunglasses;