const { DataTypes } = require("sequelize");
const { sequelize } = require("../db/connection");
const User = require("./UserModel");

const FeebackModel = sequelize.define("feedback", {
  feedbackType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subject: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  tableName: 'feedbacks',
});

User.hasOne(FeebackModel, {
  foreignKey: 'userid'
});

FeebackModel.belongsTo(User, {
  foreignKey: 'userid'
});

module.exports = FeebackModel;
