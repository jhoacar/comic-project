import DataTypes from "sequelize";
import sequelize from "../../config/mysql/connection";

console.log("Using model user with mysql");

export default class User {

  public static schema = {
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
      unique: true
    },
    image: {
      type: DataTypes.STRING,
    }

  };

  public static Model = sequelize.define('User', User.schema, { tableName: 'users' });

  constructor(ObjectToCreate: Object) {
    User.customCreate(ObjectToCreate);
  }

  public static async customFindOne(objectToFind: Object) {
    const whereQuery: any = objectToFind;
    return await User.Model.findOne({ where: whereQuery });
  };

  public static async customCreate(objectToCreate: Object) {
    const createQuery: any = objectToCreate;
    return await User.Model.create(createQuery);
  };

  public static async customUpdate(dataToUpdate: Object, objectToFind: Object) {
    const whereQuery: any = objectToFind;
    return await User.Model.update(dataToUpdate, { where: whereQuery });
  };

};

