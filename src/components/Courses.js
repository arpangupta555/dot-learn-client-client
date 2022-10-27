
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Courses = () => {
    const [categories, setcategories] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/course-categories')
            .then(res => res.json())
            .then(data => setcategories(data))
    })


    return (
        <div className='mx-auto'>

            <Container>


                <Row>
                    <Col lg="3">
                        <h4>Courses Name</h4>
                        <div>
                            {
                                categories.map(category => <div key={category.id} className='mt-1' >
                                    <button type="button" class="btn btn-outline-primary">
                                        <Link style={{ textDecoration: 'none' }} to={`/category/${category.id}`} > {category.name} </Link></button>
                                </div>)

                            }

                        </div>

                    </Col>
                    <Col lg="9">

                        <div>

                            {
                                categories.map(category => <div className='mt-1 d-flex justify-content-center ' key={category.id}>




                                    <Row xs={1} md={2} className="g-4">
                                        {Array.from({ length: 1 }).map((_, idx) => (
                                            <Col>
                                                <Card >

                                                    <Card.Body className='mt-1 justify-content-center align-items-center ' >
                                                        <Card.Title className='mt-1 d-flex justify-content-center '>{category.name}</Card.Title>
                                                        <Card.Text>
                                                            {category.details.length > 200 ?
                                                                <p> {category.details.slice(0, 200) + '...'}</p> : <p>{category.details}</p>}
                                                        </Card.Text>
                                                        <div className='mt-1 d-flex justify-content-center '>
                                                            <Image
                                                                fluid
                                                                className='me-2'
                                                                src={category.image_url}
                                                                style={{ height: '250px' }}
                                                            ></Image>
                                                        </div>
                                                        <div className='mt-1 d-flex justify-content-center '><button type="button" class="btn btn-success text-white ">
                                                            <Link class="text-white " style={{ textDecoration: 'none' }} to={`/category/${category.id}`}> More Details </Link></button></div>

                                                    </Card.Body>
                                                </Card>

                                            </Col>
                                        ))}
                                    </Row>



                                </div>)
                            }
                        </div>

                    </Col>
                </Row>


            </Container>







        </div>
    );
};

export default Courses;