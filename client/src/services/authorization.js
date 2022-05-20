
import getMainRoute from "../utils/getMainRoute";

const authUrl = process.env.APP_URL || getMainRoute() + "/auth";

export const handleRegister = async function (userObject) {
    const { name, email, password, avatar, image } = userObject;

    if (!name || !email || !password || !avatar || !image)
        return;

    try {
        const payload = { name, email, password, avatar, image }

        const response = await fetch(authUrl + "/register", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();

        if (!data.error)
            return { error: data.error }

        return { message: data.message }

    } catch (throwedError) {
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

        const data = response.json();

        if (data.error)
            return { error: data.error }


        return { message: data.message }

    } catch (throwedError) {
        const error = 'Error in Server';
        return { error };
    }
}