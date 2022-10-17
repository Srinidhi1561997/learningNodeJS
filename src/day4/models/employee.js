const Sequelize = require("sequelize");
const sequelize = require("../util/database");
const Department = require("./department");

const Employee = sequelize.define("Employee", {
  empID:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
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
  // dptID: {
  //   type: Sequelize.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: Department,
  //     key: 'id'
  //   }
  // }
},{
  timestamps: false
});

module.exports = Employee;