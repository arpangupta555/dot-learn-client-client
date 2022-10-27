import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Course from './Course';
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { Card, CardGroup, Nav } from 'react-bootstrap';

import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";


const ref = React.createRef();

const Category = () => {

    const course = useLoaderData();
    return (

        <div><h3 className='text-center mt-3'>Course Details</h3>

            <div className='mx-5 my-5 p-5' ref={ref}>

                {
                    <div className='d-block'>

                        {course.map(course => <div>





                            <Card className="text-center" >
                                <Card.Header> <h1>Course Name:{course.title}</h1> </Card.Header>
                                <Card.Body>


                                    <div>
                                        <Image
                                            fluid
                                            className='me-2'
                                            src={course.image_url}
                                            style={{ height: '250px' }}
                                        ></Image>
                                    </div>


                                </Card.Body>

                                <div> </div>
                                <Card.Footer className="text-muted"><h5>{course.details} </h5></Card.Footer>
                                <Card.Footer className="text-muted">
                                    <h5> Course Duration: {course.duration}</h5>
                                    <h5>Course Cost: {course.price}</h5>
                                    <h5>Rating: {course.rating.number} </h5>
                                </Card.Footer>

                            </Card>

                            <div className='mt-1 d-flex justify-content-center '>
                                <Nav.Link> <Link class="btn btn-success text-white my-2  " to='/premium' style={{ textDecoration: 'none' }} >Get premium access</Link></Nav.Link>
                            </div>







                        </div>)}
                    </div>

                }

                <div className="App">
                    <Pdf targetRef={ref} filename="code-example.pdf">
                        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
                    </Pdf>
                    <div >


                    </div>
                </div>

            </div>
        </div>

    );
};

export default Category; 