import axios from "axios";
import { getToken } from "./authorization";

const serverUrl = process.env.REACT_APP_SERVER_URL || '/api/v1';
const profileUrl = `${serverUrl}/user/profile`;

export const getProfile = async function () {

    const token = getToken();
    const response = await axios.get(`${profileUrl}/?token=${token}`);
    const data = response.data;

    if (data.error)
        throw data.error;

    if (!data.body)
        throw "Not body section in server";

    return data.body;
}
