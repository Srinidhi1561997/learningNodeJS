const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Department = sequelize.define("Department", {
  dptName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dptEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dptID:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  }
});

module.exports = Department;