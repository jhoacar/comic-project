import React, { useContext, useState } from 'react'
import Layout from '../../components/layouts'
import Card from '../../components/cards';
import { Form, Image, Button } from 'react-bootstrap';
import { handleLogin } from '../../services/authorization';
import { Navigate } from 'react-router-dom';
import { AppContext } from '../../store';

function Login() {

    const { globalContext, setGlobalContext } = useContext(AppContext);
    const { isLoggedIn } = globalContext;
    const [notLoginMessage, setNotLoginMessage] = useState("");

    const handleOnSubmitForm = async function (event) {
        event.preventDefault();
        const { email, password } = event.target.elements;

        const userObject = {
            email: email.value,
            password: password.value
        }
        const loginObject = await handleLogin(userObject);

        if (loginObject.body)
            setGlobalContext({ ...globalContext, isLoggedIn: true });
        else if (loginObject.error)
            setNotLoginMessage("Ha ocurrido un error en el login");
        else if (loginObject.message)
            setNotLoginMessage(loginObject.message);
        else
            setNotLoginMessage("");

    }

    return (
        <Layout>
            <Card>
                {isLoggedIn && <Navigate to="../dashboard"></Navigate>}
                <Form onSubmit={handleOnSubmitForm}>
                    <Form.Group className="mb-3 text-center">
                        <Image src={`icon.png`} width="100px" height="100px"></Image>
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
                    {notLoginMessage.length > 0 &&
                        <Form.Group>
                            <Form.Text className='text-danger'>
                                {notLoginMessage}
                            </Form.Text>
                        </Form.Group>
                    }
                </Form>
            </Card>
        </Layout>
    )
}

export default Login
