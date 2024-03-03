const { Datatype } = require("sequelize");
const sequelize = require("../../config/database");
const UserModel = sequelize.define("user", {
  id: {
    type: Datatype.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user: {
    type: Datatype.STRING,
    allowNull: false,
  },
  fullName: {
    type: Datatype.STRING,
    allowNull: false,
  },
  password: {
    type: Datatype.STRING,
    allowNull: false,
  },
  cellphone: {
    type: Datatype.STRING,
    allowNull: false,
  },
  block: {
    type: Datatype.INTEGER,
    allowNull: false,
  },
  apartment: {
    type: Datatype.INTEGER,
    allowNull: false,
  },
  rol: {
    type: Datatype.STRING,
    allowNull: false,
  },
});
module.exports = UserModel;
