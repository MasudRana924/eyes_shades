import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Dashboard.css'
import MyOrders from './MyOrders/MyOrders';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
    useRouteMatch
} from "react-router-dom";
import Review from './Review/Review';
import Payment from './Payment/Payment';
import useAuth from '../../../Hooks/useAuth';
import MakeAdmin from './MakeAdmin/MakeAdmin';
const Dashboard = () => {
    const { admin, logOut } = useAuth()
    let { path, url } = useRouteMatch();
    return (
        <Container fluid className="mt-5 pb-5">
            <Row xs={1} md={2}>
                <Col xs={12} md={4} className="admin-panel">

                    <h2 className="text-primary dashboard">DashBoard</h2>

                    <Link to={`${url}/myorders`} className="text-decoration-none">
                        <h6 className="text-start">My Orders</h6>
                    </Link>
                    <Link to={`${url}/review`} className="text-decoration-none">
                        <h6 className="text-start">Review</h6>
                    </Link>
                    <Link to={`${url}/payment`} className="text-decoration-none">
                        <h6 className="text-start">Payment</h6>
                    </Link>
                    {
                        admin && <div>
                            <Link to={`${url}/makeadmin`} className="text-decoration-none">
                                <h6 className="text-start">Make Admin</h6>
                            </Link>

                        </div>
                    }

                    <Link className="text-decoration-none">
                        <h6 className="text-start" onClick={logOut}>LogOut</h6>
                    </Link>

                </Col>

                <Col xs={12} md={8}>
                    <Switch>
                        <Route exact path={path}>

                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>

                        </Route>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                        <Route path={`${path}/payment`}>
                            <Payment></Payment>
                        </Route>
                        <Route path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </Route>


                    </Switch>



                </Col>

            </Row>


        </Container>
    );
};

export default Dashboard;