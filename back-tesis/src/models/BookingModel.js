const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
const User = require("./UserModel");

const BookingModel = sequelize.define("booking", {
  area: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  startTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  endTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'bookings',
});

User.hasOne(BookingModel, {
  foreignKey: 'userid'
});

BookingModel.belongsTo(User, {
  foreignKey: 'userid'
});

module.exports = BookingModel;
