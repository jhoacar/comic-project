import React, { useEffect, useRef, useState } from 'react'
import Layout from '../../components/layouts';
import Card from '../../components/cards';
import { Button, Form, Image } from 'react-bootstrap';
import { getAllAvatars } from '../../services/api';
import { handleRegister } from '../../services/authorization';

function Register() {

    const defaultName = "Select your avatar";
    const defaultAvatar = {
        name: defaultName,
        disabled: true,
        value: 'default',
    };

    const [avatars, setAvatars] = useState([defaultAvatar]);

    const [showImage, setShowImage] = useState(false);
    const [avatarImage, setAvatarImage] = useState("");
    const [selectValue, setSelectValue] = useState(defaultName);
    const [hasErrorSelect, setHasErrorSelect] = useState(false);

    const selectAvatarInput = useRef(null);
    const textImageInput = useRef(null);

    useEffect(() => {
        getAllAvatars().then(avatars => setAvatars([defaultAvatar, ...avatars]))
    }// eslint-disable-next-line
        , []);

    const handleOnChangeSelect = function (event) {
        const nameAvatar = event.target.value;
        const avatar = avatars.filter(avatar => avatar.name === nameAvatar).shift();
        setSelectValue(nameAvatar);
        setShowImage(true);
        setAvatarImage(avatar.image);
    }

    const handleOnSubmitForm = async function (event) {
        event.preventDefault();

        if (!textImageInput.current) {
            setHasErrorSelect(true);
            setTimeout(() => setHasErrorSelect(false), 3000);
            return;
        }
        const {name,email,password,avatar,image} = event.target.elements;
        const userObject = {
            name : name.value,
            email: email.value,
            password: password.value,
            avatar: avatar.value,
            image: image.value,
        }
        const registerObject = await handleRegister(userObject);
        
        console.log(registerObject);

    }

    return (
        <Layout>
            <Card>
                <Form onSubmit={handleOnSubmitForm}>
                    <Form.Group className="mb-3 text-center">
                        <Image src={`icon.png`} width="100px" height="100px"></Image>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter your name" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Select your avatar</Form.Label>
                        <Form.Select ref={selectAvatarInput} name='avatar' value={selectValue} onChange={handleOnChangeSelect}>
                            {
                                avatars.map((avatar, index) => (
                                    <option id={`avatar_${index}`} key={`avatar_${index}`} disabled={avatar.disabled} value={avatar.name}>
                                        {avatar.name}
                                    </option>
                                ))
                            }
                        </Form.Select>
                        {hasErrorSelect &&
                            <Form.Text className='text-danger'>
                                Please select your avatar before to send this form
                            </Form.Text>}
                    </Form.Group>
                    {
                        showImage &&
                        <Form.Group className="mb-3 text-center">
                            <Image src={avatarImage} width="100px" height="100px"></Image>
                            <Form.Control ref={textImageInput} name='image' type='hidden' value={avatarImage} />
                        </Form.Group>
                    }
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
