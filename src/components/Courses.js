import { Button } from 'bootstrap';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
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
        <div>
            <h1> this is Courses: {categories.length}</h1>

            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}> {category.name} </Link>
                    </p>)
                }

            </div>

            <div>

                {
                    categories.map(category => <div key={category.id}>




                        <Row xs={1} md={2} className="g-4">
                            {Array.from({ length: 1 }).map((_, idx) => (
                                <Col>
                                    <Card>

                                        <Card.Body>
                                            <Card.Title>{category.name}</Card.Title>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit
                                                longer.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <button><Link to={`/category/${category.id}`}> More Details </Link></button>
                                </Col>
                            ))}
                        </Row>


                        {/* <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={category.image_url} />
                            <Card.Body>
                                <Card.Title>{category.name}</Card.Title>
                                <Card.Text>
                                    {category.details}
                                </Card.Text>
                                <button><Link to={`/category/${category.id}`}> More Details </Link></button>
                            </Card.Body>
                        </Card> */}





                    </div>)
                }
            </div>


        </div>
    );
};

export default Courses;