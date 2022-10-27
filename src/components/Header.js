import React, { useEffect } from 'react';
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Image } from 'react-bootstrap';

import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/Authprovider';
import { FaUser } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import ToggleButton from 'react-bootstrap';

import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';


function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
}

const Header = () => {



    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        if (isLoading) {
            simulateNetworkRequest().then(() => {
                setLoading(false);
            });
        }
    }, [isLoading]);

    const handleClick = () => setLoading(true);

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {

        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    function myFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
    }

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


                            <Nav.Link data-tip={user?.displayName} >
                                {
                                    user?.uid ?
                                        <>


                                            <Nav.Link onClick={handleLogOut}> <Link style={{ textDecoration: 'none' }} >Log Out</Link></Nav.Link>

                                        </>

                                        :
                                        <>
                                            <Link to='/login'> Login </Link>

                                        </>
                                }

                            </Nav.Link>

                            <Nav.Link data-tip={user?.displayName}>{user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL} ></Image> : <FaUser></FaUser>
                            } </Nav.Link>

                            <ReactTooltip />

                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />

                            </div>

                        </Nav>


                    </Navbar.Collapse>

                </Container>





            </Navbar>


        </div>
    );
};

export default Header;