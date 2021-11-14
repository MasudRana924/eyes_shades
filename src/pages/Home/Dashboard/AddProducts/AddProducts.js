import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useRef } from 'react';
const AddProducts = () => {
    const keyRef = useRef()
    const nameRef = useRef()
    const priceRef = useRef()
    const imgRef = useRef()
    const ratingRef = useRef()
    const saleRef = useRef()
    const descRef = useRef()
    const stockRef = useRef()

    const handleAddPlace = (e) => {
        const key = keyRef.current.value
        const name = nameRef.current.value
        const cost = priceRef.current.value
        const img = imgRef.current.value
        const rating = ratingRef.current.value
        const stock = stockRef.current.value
        const desc = descRef.current.value
        const sale = saleRef.current.value
        const product = { key, cost, name, img, rating, sale, desc, stock }
        fetch('https://fierce-wildwood-12311.herokuapp.com/glasses', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added succesfully')
                    e.target.reset()
                }
            })
        e.preventDefault()
    }

    return (
        <Container fluid className="" >
            <h2 className="text-start dashboard">Add Place</h2>
            <div>
                <Row xs={1} md={1}>

                    <Col md={8}>
                        <div className="form">
                            <Form onSubmit={handleAddPlace}>

                                <Row className="mb-3 text-start ">
                                    <Form.Group as={Col} >
                                        <Form.Label>Key</Form.Label>
                                        <Form.Control type="text" ref={keyRef} placeholder="Enter key" />
                                    </Form.Group>
                                    <Form.Group as={Col} >
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                                    </Form.Group>

                                </Row>

                                <Row className="mb-3 text-start">
                                    <Form.Group as={Col} >
                                        <Form.Label>Price</Form.Label>
                                        <Form.Control ref={priceRef} type="number" placeholder="Enter price" />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Image</Form.Label>
                                        <Form.Control ref={imgRef} type="text" placeholder="Image" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 text-start">
                                    <Form.Group as={Col} >
                                        <Form.Label>Sale</Form.Label>
                                        <Form.Control ref={saleRef} type="number" placeholder="Enter % sale " />
                                    </Form.Group>

                                    <Form.Group as={Col} >
                                        <Form.Label>Stock</Form.Label>
                                        <Form.Control ref={stockRef} type="text" placeholder="In Stock or not " />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3 text-start">
                                    <Form.Group as={Col} >
                                        <Form.Label>Rating</Form.Label>
                                        <Form.Control ref={ratingRef} type="number" placeholder="Give rating" />
                                    </Form.Group>
                                    <Form.Group as={Col} >
                                        <Form.Label>Description</Form.Label>
                                    
                                        <Form.Control ref={descRef}  as="textarea"  />

                                    </Form.Group>
                                  
                                </Row>
                                <Button className="w-50 mx-auto " variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>

                        </div>

                    </Col>

                </Row>
            </div>
        </Container>
    );
};

export default AddProducts;