module.exports = {
    dbConnection: process.env.DB_CONNECTION,
    MYSQL: 'mysql',
    MONGO: 'mongodb',
    API: 'api',
    mysql:{
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
    },
    mongo:{
        uri: process.env.DB_URI,
    },
    api:{
        url: process.env.DB_API_URL,
    }
}