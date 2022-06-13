import axios from 'axios';

const serverUrl = process.env.REACT_APP_SERVER_URL || '/api/v1';
const authUrl = `${serverUrl}/auth`;
const allAvatarsUrl = `${serverUrl}/user/avatar`;

export const handleRegister = async function (userObject) {

    const { name, email, password, avatar, image } = userObject;

    if (!name || !email || !password || !avatar || !image)
        throw new Error('Missing required fields');

    const responseAvatars = await axios.get(allAvatarsUrl);
    const allAvatars = responseAvatars.data;

    let isAvatarInSystem = false;

    console.log("Avatars in system: ", allAvatars);

    if (allAvatars.length > 0) {
        const matched = allAvatars.find(avatarName => avatar === avatarName);
        isAvatarInSystem = matched?.length;
    }

    if (isAvatarInSystem)
        throw new Error("Cannot register beacuse avatar is already in system");

    const payload = { name, email, password, avatar, image };

    const response = await axios.post(authUrl + "/register", payload);
    const data = response.data;

    console.log("Data in register: ", data);

    if (data.error)
        throw new Error(data.error);

    return data.message;
}

export const handleLogin = async function (userObject) {

    const { email, password } = userObject;

    if (!email || !password)
        throw new Error('Missing required fields');

    const payload = { email, password }

    const response = await axios.post(authUrl + "/login", payload);
    const data = response.data;

    if (data.error)
        throw new Error(data.error);

    if (!data.body)
        throw new Error("Not body section in server");

    console.log(data);

    setToken(data.body.token);

    return data.message;
}

export const getToken = function () {
    return localStorage.getItem("token");
}

export const setToken = function (token) {
    localStorage.setItem("token", token);
}

export const isLoggedIn = function () {
    return localStorage.getItem("token")?.length > 0;
}