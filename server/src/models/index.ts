import configuration from '../config/database';

const { connection: engine, SQL, MONGO } = configuration;

export interface UserSchema{
    name: string,
    email: string,
    password: string,
    avatar:string,
    image:string
}


let user: string = "";

switch (engine) {
    case SQL:
        user = './sql/user';
        break;
    case MONGO:
        user = './mongo/user';
        break;
    default:
        throw `Must be specified DB_CONNECTION environment variable, and can be: ${SQL}, ${MONGO}, not ${engine}`;
}

export default async function () {
    const { default: User } = await import(user);

    return {
        User
    }
}   