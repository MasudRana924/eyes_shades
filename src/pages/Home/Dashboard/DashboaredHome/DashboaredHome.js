import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort, faPen, faPlus, faTasks, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { faProductHunt } from '@fortawesome/free-brands-svg-icons'
import './DashboaredHome.css'
import { Link, useRouteMatch } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
const DashboaredHome = () => {
    const { admin } = useAuth()
    let {  url } = useRouteMatch();
    const sort = <FontAwesomeIcon icon={faSort} />
    const pen = <FontAwesomeIcon icon={faPen} />
    const plus = <FontAwesomeIcon icon={faPlus} />
    const task = <FontAwesomeIcon icon={faTasks} />
    const phunt = <FontAwesomeIcon icon={faProductHunt} />
    const Admin = <FontAwesomeIcon icon={faUserLock} />
    return (
        <Container fluid >
            <Row xs={1} md={3}>
                <Col className="">
                    <div className="sort">
                        <p className="sort-icon pt-3">{sort}</p>
                        <Link to={`${url}/myorders`} className="text-decoration-none">
                            <h3 className="text-center text-white">My Orders</h3>
                        </Link>
                    </div>
                </Col>
                <Col className="">
                    <div className="pen">
                        <p className="pen-icon pt-3">{pen}</p>
                        <Link to={`${url}/review`} className="text-decoration-none">
                            <h3 className="text-center text-white">Review</h3>
                        </Link>
                    </div>
                </Col>
                {
                    admin && <Col className="">
                        <div className="plus">
                            <p className="plus-icon pt-3">{plus}</p>
                            <Link to={`${url}/addproduct`} className="text-decoration-none">
                                <h3 className="text-center text-white">Add Product</h3>
                            </Link>
                        </div>
                    </Col>
                }
                {
                    admin && <Col className="mt-3">
                    <div className="task">
                        <p className="task-icon pt-3">{task}</p>
                        <Link to={`${url}/manageproduct`} className="text-decoration-none">
                                <h3 className="text-center text-white">Manage Products</h3>
                            </Link>
                    </div>
                </Col>
                }

                {
                    admin &&   <Col className="mt-3">
                    <div className="phunt">
                        <p className="phunt-icon pt-3">{phunt}</p>
                        <Link to={`${url}/manageorders`} className="text-decoration-none">
                                <h3 className="text-center text-white">Manage Orders</h3>
                            </Link>
                    </div>
                </Col>
                }
              {
                  admin &&  <Col className="mt-3">
                  <div className="admin">
                      <p className="admin-icon pt-3">{Admin}</p>
                      <Link to={`${url}/makeadmin`} className="text-decoration-none">
                                <h3 className="text-center text-white">Make Admin</h3>
                            </Link>
                  </div>
              </Col>
              }
          </Row>

        </Container>
    );
};

export default DashboaredHome;