import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';

const Premium = () => {

    const [categories, setcategories] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    })
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6">






                        <div className='mt-5'> <img src="https://i.ibb.co/8NhW09L/ezgif-com-gif-maker-10.gif" class="img-fluid" alt="Responsive image" />
                        </div>

                    </Col>
                    <Col lg="6">
                        <div className='mt-5'>
                            <h1>Congratulations!! <br /> You are a <span className='text-primary'>Premium member</span>  now </h1>
                            <h4 className='mt-5'> <span className='text-danger'>DotLearn</span> Premium Membership has what you need to take your studying to the next level with resources and discounts. </h4>

                        </div>
                    </Col>

                </Row>

                <Row><div className='mx-auto d-flex flex-row'>
                    {
                        categories.map(category => <div key={category.id} className='mt-1 mx-2' >
                            <button type="button" class="btn btn-outline-primary">
                                <Link style={{ textDecoration: 'none' }} to={`/category/${category.id}`} > {category.name} </Link></button>
                        </div>)

                    }

                </div></Row>

                <div className='mt-1 d-flex justify-content-center '><button type="button" class="btn btn-success text-white ">
                    <Link class="text-white " style={{ textDecoration: 'none' }} to='/home'> Back to Home </Link ></button></div>
            </Container>
        </div>
    );
};

export default Premium;