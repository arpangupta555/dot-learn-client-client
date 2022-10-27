import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Premium = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="6">

                        <div className='mt-5'> <img src="https://www.dcubedata.com/images/ezgif.com-gif-maker-10.gif" class="img-fluid" alt="Responsive image" />
                        </div>

                    </Col>
                    <Col lg="6">
                        <div className='mt-5'>
                            <h1>Congratulations!! <br /> You are a <span className='text-primary'>Premium member</span>  now </h1>
                            <h4 className='mt-5'> <span className='text-danger'>DotLearn</span> Premium Membership has what you need to take your studying to the next level with resources and discounts. </h4>

                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Premium;