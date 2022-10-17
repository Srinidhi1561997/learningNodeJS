const Sequelize = require("sequelize");
const sequelize = require("../util/database");

const Department = sequelize.define("Department", {
  dptID:{
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dptName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  dptEmail: {
    type: Sequelize.STRING,
    allowNull: false,
  },
},{
  timestamps: false
});

module.exports = Department;