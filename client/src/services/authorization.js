const serverUrl = process.env.REACT_APP_SERVER_URL || '/api/v1';
const authUrl = `${serverUrl}/auth`;
const allAvatarsUrl = `${serverUrl}/user/avatar`;

export const handleRegister = async function (userObject) {

    const { name, email, password, avatar, image } = userObject;

    if (!name || !email || !password || !avatar || !image)
        return;

    try {

        const responseAvatars = await fetch(allAvatarsUrl);
        const jsonAvatars = await responseAvatars.json();
        const allAvatars = jsonAvatars.body;

        let isAvatarInSystem = false;

        console.log("Avatars in system: ", allAvatars);

        if (allAvatars.length > 0) {
            const matched = allAvatars.find(avatarName => avatar === avatarName);
            isAvatarInSystem = matched?.length;
        }


        if (isAvatarInSystem)
            return { message: "No se puede registrar porque ya hay alguien con este avatar" };

        const payload = { name, email, password, avatar, image };

        const response = await fetch(authUrl + "/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        console.log("Data in register: ", data);

        if (data.error)
            return { error: data.error }

        return { body: data.body }

    } catch (throwedError) {

        console.log("Error in register: ", throwedError);
        const error = 'Error in Server';
        return { error };
    }
}

export const handleLogin = async function (userObject) {
    const { email, password } = userObject;

    if (!email || !password)
        return;
    try {
        const payload = { email, password }

        const response = await fetch(authUrl + "/login", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        console.log("Data in Login: ", data);

        if (data.error)
            return { error: data.error }


        localStorage.setItem("loggedIn", 1);

        return { body: data.body }

    } catch (throwedError) {
        console.log("Error in login", throwedError);
        const error = 'Error in Server';
        return { error };
    }
}

export const handleLogout = function () {
    localStorage.setItem("loggedIn", 0);
}

export const isLoggedIn = function () {
    return parseInt(localStorage.getItem("loggedIn")) === 1;
}