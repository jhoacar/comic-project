const { dbConnection, MYSQL, MONGO, API } = require("./database");

let connection;

switch (dbConnection) {
    case MYSQL:
        connection = require("./mysql/init"); break;
    case MONGO:
        connection = require("./mongo/init"); break;
    case API:
        connection = require("./api/init"); break;
    default:
        throw `Must be specified DB_CONNECTION environment variable, and can be: ${MYSQL}, ${MONGO} or ${API}, not ${dbConnection}`;
}

module.exports = connection;

