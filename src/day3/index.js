require("dotenv").config();
const sequelize = require("./util/database");
const express = require("express");
const app = express();
const Employee = require("./models/employee");
const Department = require("./models/department");
const bodyParser = require('body-parser');
const employee = require('./routes/employee');
const department = require('./routes/department');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

Department.hasMany(Employee);
Employee.belongsTo(Department);
app.use('/employee', employee);
app.use('/department', department);



(async () => {
    try{
        await sequelize.sync();
    } catch(error){
        console.error('error connecting server', error)
    }   
})();

const server = app.listen(3110,()=>{
    console.log("listening on port %s...", server.address().port)
})