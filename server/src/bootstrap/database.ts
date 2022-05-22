import configuration from '../config/database';

const { connection: engine, MYSQL, MONGO } = configuration;

let initialization: string = "";

switch (engine) {
    case MYSQL:
        initialization = '../config/mysql/init';
        break;
    case MONGO:
        initialization = '../config/mongo/init';
        break;
    default:
        throw `Must be specified DB_CONNECTION environment variable, and can be: ${MYSQL}, ${MONGO}, not ${engine}`;
}
export default import(initialization);