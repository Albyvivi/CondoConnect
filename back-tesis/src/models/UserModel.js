const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
const UserModel = sequelize.define("user", {
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cellPhone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apartment: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
},
  {
    timestamps: false,
    tableName: 'users',
  });

module.exports = UserModel;
