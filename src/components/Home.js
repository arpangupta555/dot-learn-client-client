import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup';

const Home = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6">

                        <div> <img src="https://i.ibb.co/wshrPFN/web-dev.gif" class="img-fluid" alt="Responsive image" />
                        </div>

                    </Col>
                    <Col lg="6">
                        <div className='mt-5'>
                            <h1> Welcome to <span className='text-primary'>DotLearn</span> </h1>
                            <h4 className='mt-5'>DotLearn is a blockchain-powered learning platform offering various free and paid courses on crypto and digital skills, including online coding classes on languages like HTML, CSS, JavaScript, and PHP.

                                The platform also has a unique system that rewards students with a token after completing a session. They can then use the tokens to fund the upcoming courses and get discounts for premium classes.</h4>
                        </div>
                    </Col>
                </Row>
                <Row className='mt-5 text-center'>
                    <h1> Our Top <span className='text-danger'>Courses</span> </h1>
                    <CardGroup className='mt-5'>
                        <Card>
                            <Card.Img variant="top" src="https://a.thumbs.redditmedia.com/zDOFJTXd6fmlD58VDGypiV94Leflz11woxmgbGY6p_4.png" />
                            <Card.Body>
                                <Card.Title> <h1>JavaScript</h1> </Card.Title>

                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/tBvGZXT/python.png" />
                            <Card.Body>
                                <Card.Title> <h1>Python</h1> </Card.Title>

                            </Card.Body>

                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://i.ibb.co/SRdgV7Z/java-logo.jpg" />
                            <Card.Body>
                                <Card.Title> <h1>Java</h1> </Card.Title>

                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Row>


            </Container>
        </div >
    );
};

export default Home;