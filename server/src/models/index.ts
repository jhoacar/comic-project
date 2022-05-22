import configuration from '../config/database';

const { connection: engine, MYSQL, MONGO } = configuration;

let user: string = "";

switch (engine) {
    case MYSQL:
        user = './mysql/user';
        break;
    case MONGO:
        user = './mongo/user';
        break;
    default:
        throw `Must be specified DB_CONNECTION environment variable, and can be: ${MYSQL}, ${MONGO}, not ${engine}`;
}


export const User = import(user);