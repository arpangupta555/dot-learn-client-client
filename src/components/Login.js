import { Button, Nav } from 'react-bootstrap';
import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';

import Authprovider, { AuthContext } from '../context/Authprovider/Authprovider';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {


    const [error, setError] = useState('');
    const { signIn } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')
                navigate(from, { replace: true });

            })
            .catch(error => {

                console.error(error)
                setError(error.message);
            })



    }

    const { providerLogin } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {

        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);


            })
            .catch(error => console.error(error))
    }

    return (
        <div >
            <Form onSubmit={handleSubmit} className='mx-5 my-5 border border-primary p-5 rounded ' >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Text className="text-muted">
                        {error}
                    </Form.Text>
                </Form.Group>
                <p>New in this site  <Link to='/register' style={{ textDecoration: 'none' }} >Register Here</Link></p>
            </Form>


            <Stack gap={2} className="col-md-5 mx-auto">
                <Button onClick={handleGoogleSignIn} variant="secondary">Sign-in With Google</Button>

            </Stack>
        </div>
    );
};

export default Login;