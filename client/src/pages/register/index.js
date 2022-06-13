import React, { useContext, useEffect, useReducer, useState } from 'react'
import Layout from '../../components/layouts';
import Card from '../../components/cards';
import { Button, Form, Image } from 'react-bootstrap';
import { getAllAvatars } from '../../services/api';
import { handleRegister } from '../../services/authorization';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import registerReducer from './reducers';
import { SET_AVATAR, SET_EMAIL, SET_IMAGE, SET_NAME, SET_PASSWORD } from './constants';
import { toast } from 'react-hot-toast';

function Register() {

    const [isLoggedIn] = useContext(AuthContext);
    const [registerState, dispatch] = useReducer(registerReducer, {
        name: '',
        email: '',
        password: '',
        avatar: '',
        image: '',
    });

    const { name, email, password, avatar, image } = registerState;
    const [avatars, setAvatars] = useState([]);

    useEffect(() => {
        getAllAvatars()
            .then(avatars => setAvatars(avatars));
    }, []);

    const handleOnChangeSelect = function (event) {
        const avatarObject = avatars.find(avatar => avatar.name === event.target.value);
        dispatch({ type: SET_AVATAR, payload: avatarObject.name });
        dispatch({ type: SET_IMAGE, payload: avatarObject.image });
    }

    const handleOnSubmitForm = async function (event) {

        event.preventDefault();

        try {
            const userObject = { name, email, password, avatar, image }
            await handleRegister(userObject);
            toast.success("Registro exitoso");
        } catch (error) {
            console.log(error);
            toast.error("Ha ocurrido un error en el registro");
        }
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
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={name} onChange={event => dispatch({ type: SET_NAME, payload: event.target.value })} name='name' type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={email} onChange={event => dispatch({ type: SET_EMAIL, payload: event.target.value })} name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={event => dispatch({ type: SET_PASSWORD, payload: event.target.value })} name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select your avatar</Form.Label>
                        <Form.Select value={avatar} name='avatar' onChange={handleOnChangeSelect} required>
                            <option value="" disabled>Select your avatar</option>
                            {
                                avatars.map((avatar, index) => (
                                    <option id={`avatar_${index}`} key={`avatar_${index}`} value={avatar.name}>
                                        {avatar.name}
                                    </option>
                                ))
                            }
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3 text-center">
                        {
                            image.length > 0 &&
                            <Image src={image} width="100px" height="100px"></Image>
                        }
                        <Form.Control name='image' type='hidden' value={image} required />
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

export default Register
