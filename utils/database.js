const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "parth", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
