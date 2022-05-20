// eslint-disable-next-line
import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/layouts'
import Card from '../../components/cards';
import { Form, Image, Button } from 'react-bootstrap';
import getMainRoute from '../../utils/getMainRoute';
import { handleLogin } from '../../services/authorization';

function Login() {

    const handleOnSubmitForm = async function (event) {
        event.preventDefault();
        const {email,password} = event.target.elements;

        const userObject = {
            email: email.value,
            password: password.value
        }
        const loginObject = await handleLogin(userObject);
        
        console.log(loginObject);
    }

    return (
        <Layout>
            <Card>
                <Form onSubmit={handleOnSubmitForm}>
                    <Form.Group className="mb-3 text-center">
                        <Image src={`${getMainRoute()}/icon.png`} width="100px" height="100px"></Image>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3 text-center">
                        <Button className='text-center' variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Card>
        </Layout>
    )
}

export default Login
