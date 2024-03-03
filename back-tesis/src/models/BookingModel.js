const { Datatype } = require("sequelize");
const sequelize = require("../../config/database");
const BookingModel = sequelize.define("booking", {
  id: {
    type: Datatype.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  area: {
    type: Datatype.STRING,
  },
  date: {
    type: Datatype.DATE,
  },

  start_time: {
    type: Datatype.DATE,
  },
  end_time: {
    type: Datatype.DATE,
  },

  user_id: {
    type: Datatype.INTEGER,
  },
  desc: {
    type: Datatype.STRING,
  },
});
module.exports = BookingModel;
