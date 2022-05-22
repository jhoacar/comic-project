import {Sequelize} from 'sequelize';
import configuration from '../database';

const uri:string = configuration.mysql.uri || "mysql://localhost/test";

export default new Sequelize(uri);