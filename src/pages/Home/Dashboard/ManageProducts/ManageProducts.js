import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner, Col} from 'react-bootstrap';
import ManageProduct from '../ManageProduct/ManageProduct';


const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const [pageCount, setPageCount] = useState(0)
    const [page, setPage] = useState(0)
    const size = 9
    useEffect(() => {
        fetch(`http://localhost:5000/products?page=${page}&&size=${size}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                const count = data.count
                const pageNumber = Math.ceil(count / size)
                setPageCount(pageNumber)
            })
    }, [page])
    return (
        <Container fluid className="">
              <h2 className="text-start dashboard">Manage Products </h2>
        <div className="">
            {products.length === 0 ? < div className="spinner"> <Spinner animation="border" className="spinner" />
            </div>
                : <Row xs={1} md={3} className="">
                    {
                        products.map(glass => <ManageProduct
                          glass={glass}
                        ></ManageProduct>)
                    }

                </Row>
            }
            <Row xs={1} md={1}>
                
                <Col >

                <div className="pagination">
                        {
                            [...Array(pageCount).keys()].map(number => <button
                                key={number}
                                onClick={() => setPage(number)}
                                className={number === page ? 'selected' : ''}

                            >{number + 1}</button>)
                        }

                    </div>
                </Col>
             


            </Row>




        </div>

    </Container>
    );
};

export default ManageProducts;