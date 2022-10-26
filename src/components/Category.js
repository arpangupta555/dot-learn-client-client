import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card, CardGroup, Nav } from 'react-bootstrap';

const Category = () => {

    const course = useLoaderData();
    return (
        <div className='mx-5 my-5 p-5'>

            {
                <div>

                    {course.map(course => <div>





                        <Card className="text-center" >
                            <Card.Header>Course Name:{course.title}</Card.Header>
                            <Card.Body>
                                <Card.Title></Card.Title>

                                <div>
                                    <Image
                                        fluid
                                        className='me-2'
                                        src={course.image_url}
                                        style={{ height: '250px' }}
                                    ></Image>
                                </div>


                            </Card.Body>
                            <Card.Footer className="text-muted">2 days ago</Card.Footer>

                        </Card>


                        <Nav.Link> <Link to='/premium' style={{ textDecoration: 'none' }} >Premium</Link></Nav.Link>








                    </div>)}
                </div>

            }
        </div>
    );
};

export default Category; 