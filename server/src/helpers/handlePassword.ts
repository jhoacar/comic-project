import { hash, compare } from "bcrypt";

import configuration from '../config/hash';

const { saltRoundsBcrypt: saltRounds } = configuration;

export const getHashedPassword = async (plainPassword: string) => {

    const hashedPassword = await hash(plainPassword, saltRounds);
    return hashedPassword;
}

export const comparePassword = async (plainPassword: string, hashedPassword: string) => {

    const result = await compare(plainPassword, hashedPassword);
    return result;
}