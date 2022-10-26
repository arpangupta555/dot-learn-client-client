import React, { useState } from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Authprovider/Authprovider';



const Register = () => {
    const [error, setError] = useState('');
    const { createUser } = useContext(AuthContext);
    const handleSubmit = event => {



        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                setError('')

            })

            .catch(error => {

                console.error(error)
                setError(error.message);
            })

    }

    return (
        <Form onSubmit={handleSubmit} className='mx-5 my-5 border border-primary p-5 rounded ' >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control name="name" type="name" placeholder="Your Name" />

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name="photoURL" type="text" placeholder="Your Photo" />

            </Form.Group>
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

            <p>Have an Account? <Link to='/login' style={{ textDecoration: 'none' }} >Please sign-in</Link></p>


        </Form>
    );
};

export default Register;