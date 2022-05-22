import { sign, verify } from "jsonwebtoken";
import configuration from '../config/hash';
const { secretKey, expiresInJWT } = configuration;

export const getJsonWebToken = (userData: Object) => {
    return sign(userData, secretKey, { expiresIn: expiresInJWT });
}

export const getPayloadData = (token: string) => {
    return verify(token, secretKey);
}