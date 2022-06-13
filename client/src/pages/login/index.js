import React, { useContext, useState } from 'react'
import Layout from '../../components/layouts'
import Card from '../../components/cards';
import { Form, Image, Button } from 'react-bootstrap';
import { handleLogin } from '../../services/authorization';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { toast } from 'react-hot-toast';

function Login() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [notLoginMessage, setNotLoginMessage] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

    const handleChangeEmail = (event) => {
        setEmail(email => event.target.value);
    };

    const handleChangePassword = (event) => {
        setPassword(password => event.target.value);
    };

    const handleOnSubmitForm = function (event) {

        event.preventDefault();

        const userObject = { email, password }

        handleLogin(userObject)
            .then(response => {
                setIsLoggedIn(true);
                toast.success("Login exitoso");
            })
            .catch(error => {
                console.log(error);
                setNotLoginMessage("Ha ocurrido un error en el login");
                toast.error("Ha fallado el login");
            });
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
                        <Form.Control onChange={handleChangeEmail} name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onChange={handleChangePassword} name='password' type="password" placeholder="Password" required />
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
