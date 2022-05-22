import { BuildOptions, DataTypes, Model, ModelStatic } from "sequelize/types";
import sequelize from "../../config/mysql/connection";

const UserSchema = {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  avatar: {
    type: DataTypes.STRING,
  },

};


console.log("Using model user with mysql");

const User = sequelize.define('User', UserSchema, { tableName: 'users' });

const customFindOne = async (objectToFind: Object) => {

  const whereQuery: any = objectToFind;
  return await User.findOne({ where: whereQuery });
};

const customCreate = async (objectToCreate: Object) => {
  const createQuery: any = objectToCreate;
  return await User.create(createQuery);
};

const customUpdate = async (dataToUpdate: Object, objectToFind: Object) => {
  const whereQuery: any = objectToFind;
  return await User.update(dataToUpdate, { where: whereQuery });
};


User.prototype.customFindOne = customFindOne;
User.prototype.customCreate = customCreate;
User.prototype.customUpdate = customUpdate;


export default User;

