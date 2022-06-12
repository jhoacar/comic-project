import { Options, Sequelize } from 'sequelize';
import configuration from '../database';

const uri: string = configuration.sql.uri || "mysql://localhost/test";

const options: Options = {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
}

export default new Sequelize(uri, options);