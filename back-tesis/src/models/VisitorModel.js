const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
const User = require("./UserModel");

const VisitorModel = sequelize.define("visitor", {
  visitorType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  time: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  parkingSlot: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'visitors',
});

User.hasOne(VisitorModel, {
  foreignKey: 'userid'
});

VisitorModel.belongsTo(User, {
  foreignKey: 'userid'
});

module.exports = VisitorModel;
