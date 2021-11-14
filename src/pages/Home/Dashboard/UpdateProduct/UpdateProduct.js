import React, { useEffect, useRef, useState } from 'react';
import { Col, Container, Form, Row,Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const UpdateProduct = () => {
    const { glassId } = useParams()
    const [glass, setGlass] = useState({})
    useEffect(() => {
        fetch(`https://fierce-wildwood-12311.herokuapp.com/glass/${glassId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setGlass(data)
            })
    }, [])
    const nameRef = useRef()
    const priceRef = useRef()
    const imgRef = useRef()
    const ratingRef = useRef()
    const saleRef = useRef()
    const descRef = useRef()
    const stockRef = useRef()

    const handleUpdate = (e) => {
        const name = nameRef.current.value
        const price = priceRef.current.value
        const img = imgRef.current.value
        const star =ratingRef.current.value
        const stock = stockRef.current.value
        const desc = descRef.current.value
        const sale = saleRef.current.value
        const product = {price, name, img, star, sale, desc, stock }
        const url = `https://fierce-wildwood-12311.herokuapp.com/updateproduct/${glassId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount>0) {
                    alert('Product update succesfully')
                     setGlass(product)
                    e.target.reset()
                }
            })
        e.preventDefault()
    }

return (
    <Container>
        <h2 className="text-start dashboard">Update Product</h2>
        <Row xs={1} md={1}>

            <Col md={12}>
                <div className="details-card">
                    <Row xs={1} md={2}>
                        <Col>
                            <div>
                                <img src={glass.img} alt="" />

                            </div>
                        </Col>
                        <Col>

                            <div className="details">
                                <p className=" text-start fs-4 ms-3">{glass.name}</p>
                                <p className=" text-start  ms-3">{glass.desc}</p>


                                <div className="price-rating">
                                    <p className=" text-start ms-3"><span className="text-muted">
                                        Price :
                                    </span>
                                        <span className="price">
                                            ${glass.price}
                                        </span> </p>
                                    <span className="fs-6">
                                        rating : <span className="price">
                                            {glass.star}/5
                                        </span>
                                    </span>
                                </div>

                                <div className="price-rating">
                                    <p className=" text-start ms-3"><span className="text-muted">
                                        Sale :
                                    </span>
                                        <span className="price">
                                            %{glass.sale} off
                                        </span> </p>
                                    <span className="fs-6">
                                        Stock : <span className="price">
                                            {glass.stock}
                                        </span>
                                    </span>
                                </div>


                            </div>
                        </Col>

                    </Row>
                </div>
            </Col>
        </Row>
        <Row>
            <Row xs={1} md={1}>

                <Col md={8}>
                    <div className="form">
                        <Form onSubmit={handleUpdate}>

                            <Row className="mb-3 text-start ">
                
                                <Form.Group as={Col} >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control ref={nameRef} type="name" placeholder="Enter name" />
                                </Form.Group>

                            </Row>

                            <Row className="mb-3 text-start">
                                <Form.Group as={Col} >
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control ref={priceRef} type="number" placeholder="Enter  even numbers price" />
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
                                    <Form.Control ref={ratingRef} type="number" placeholder="Give  even numbers rating " />
                                </Form.Group>
                                <Form.Group as={Col} >
                                    <Form.Label>Description</Form.Label>

                                    <Form.Control ref={descRef} as="textarea" />

                                </Form.Group>

                            </Row>
                            <Button className="w-50 mx-auto " variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>

                    </div>

                </Col>

            </Row>
        </Row>
    </Container>
)


};

export default UpdateProduct;