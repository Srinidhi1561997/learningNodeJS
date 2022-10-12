const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Department = require("./department");

const Employee = sequelize.define("Employee", {
  empName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  empEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  empAge: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  empID:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  // dptID: {
  //   type: Sequelize.INTEGER,
  //   references: {
  //     model: Department,
  //     key: 'id'
  //   }
  // }
});

module.exports = Employee;