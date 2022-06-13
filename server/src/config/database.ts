export default  {
    connection: process.env.DB_CONNECTION,
    SQL: 'sql',
    MONGO: 'mongodb',
    sql: {
        uri: process.env.DB_URI?.includes('postgres') ? process.env.DATABASE_URL : process.env.DB_URI,
    },
    mongo: {
        uri: process.env.DB_URI,
    }
}