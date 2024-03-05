const { Sequelize } = require('sequelize');

const database = "condoconnect";
const username = "sadmin";
const password = "A28w3*Dc";
const host = "db-softbuilders-dev.postgres.database.azure.com";

const sequelize = new Sequelize(database, username, password, {
  host: host,
  dialect: 'postgres',dialectOptions: {
    ssl:true
  },
  quoteIdentifiers: false
});

module.exports = {
  sequelize
}