import DataTypes from "sequelize";
import { UserSchema } from "..";
import sequelize from "../../config/sql/connection";

console.log("Using model user with sql");

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

  public static async customFindAll(): Promise<UserSchema[]> {

    const users = await User.Model.findAll();
    return users.map((user: any): UserSchema => {

      const name: string = user.name;
      const email: string = user.email;
      const password: string = user.password;
      const avatar: string = user.avatar;
      const image: string = user.image;
      return { name, email, password, avatar, image };
    })
  }


  public static async customCreate(objectToCreate: Object) {
    const createQuery: any = objectToCreate;
    return await User.Model.create(createQuery);
  };

  public static async customUpdate(dataToUpdate: Object, objectToFind: Object) {
    const whereQuery: any = objectToFind;
    return await User.Model.update(dataToUpdate, { where: whereQuery });
  };

};

