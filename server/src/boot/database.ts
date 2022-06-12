import configuration from '../config/database';

const { connection: engine, SQL, MONGO } = configuration;

let initialization: string = "";

switch (engine) {
    case SQL:
        initialization = '../config/sql/init';
        break;
    case MONGO:
        initialization = '../config/mongo/init';
        break;
    default:
        throw `Must be specified DB_CONNECTION environment variable, and can be: ${SQL}, ${MONGO}, not ${engine}`;
}
export default import(initialization);