import React from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/Authprovider';
import { FaUser } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';


const Header = () => {

    const { user } = useContext(AuthContext)

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>

                    <Navbar.Brand href="#home"> DotLearn</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>




                            <Nav.Link><Link to='/home' style={{ textDecoration: 'none' }} >Home</Link></Nav.Link>
                            <Nav.Link> <Link to='/courses' style={{ textDecoration: 'none' }} >Courses</Link></Nav.Link>
                            <Nav.Link><Link to='/faq' style={{ textDecoration: 'none' }} >FAQ</Link></Nav.Link>
                            <Nav.Link> <Link to='/blog' style={{ textDecoration: 'none' }} >Blog</Link></Nav.Link>
                            <Nav.Link><Link to='/login' style={{ textDecoration: 'none' }} >Login</Link></Nav.Link>
                            {/* <Nav.Link data-tip={user?.displayName} >{user?.displayName}</Nav.Link> */}
                            <Nav.Link data-tip={user?.displayName}>{user.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user.photoURL} ></Image> : <FaUser></FaUser>
                            } </Nav.Link>


                            <ReactTooltip />


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;