const {DataTypes} = require("sequelize");
const {sequelize} = require("../db/connection");
const BookingModel = sequelize.define("booking", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  area: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },

  start_time: {
    type: DataTypes.DATE,
  },
  end_time: {
    type: DataTypes.DATE,
  },

  user_id: {
    type: DataTypes.INTEGER,
  },
  desc: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: false,
  tableName: 'Bookings',
});
module.exports = {BookingModel};
