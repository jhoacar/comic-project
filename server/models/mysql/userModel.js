const { DataTypes } = require('sequelize');

const sequelize = require("../../config/mysql/connection");

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

const customFindOne = async (objectToFind) => {
  return await User.findOne({ where: objectToFind });
};

const customCreate = async (objectToCreate) => {
  return await User.create(objectToCreate);
};

const customUpdate = async (dataToUpdate, objectToFind) => {
  return await User.update(dataToUpdate, { where: objectToFind });
};

User.customFindOne = customFindOne;
User.customCreate = customCreate;
User.customUpdate = customUpdate;


module.exports = User;

