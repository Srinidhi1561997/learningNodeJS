const Employee = require("../models/employee");
const sequelize = require("../util/database");
const {QueryTypes} = require("sequelize");

exports.allEmployee = async(req,res,next)=>{
    try{
        // const employees = await Employee.findAll();
        const employees = await sequelize.query('SELECT * FROM dbo.Employees')
        console.log('print the employee table', employees)
        res.status(200).send(employees);
    }catch(error){
        res.status(400).send(error.message)
    }
};

exports.getEmployee = async(req,res,next)=>{
    const { empID } = req.params;
    try{
        // const employee = await Employee.findByPk(empID)
        const employee = await sequelize.query("SELECT * FROM dbo.Employees WHERE empID = :empID",{
            type: QueryTypes.SELECT,
            replacements: {empID:empID},
           })
        res.status(200).send(employee);
        next();
    }catch(error){
        // console.log('print the error',dptID,error)
        res.status(400).send(`${error}`);
    }
};


exports.addEmployee = async(req, res, next)=>{
    try {
    //    await Employee.create(req.body);
    await sequelize.query("INSERT INTO dbo.Employees ([empName], [empEmail], [empAge], [dptID]) VALUES (?,?,?,?)",{
        type: QueryTypes.INSERT,
        replacements: [req.body.empName, req.body.empEmail, req.body.empAge, req.body.dptID],
       },)
        res.status(200).send(`${req.body.empEmail} added successfully`)
    } catch (error) {
        console.log('error is adding employee', error)
        res.status(400).send(`${req.body.empEmail} not added`)
    }
};

exports.updateEmployee = async(req, res, next)=>{
    const { empID } = req.params;
    try {
        await Employee.update(req.body,{where:{empID}});
        res.status(200).send(`Employee updated successfully`)
    } catch (error) {
        res.status(400).send(`Employee not updated`)
    }
};

exports.removeEmployee = async(req,res,next)=>{
    const { empID } = req.params;
    try{
        // await Employee.destroy({where:{empID}})
        await sequelize.query("DELETE FROM dbo.Employees WHERE empID = :empID",{
            type: QueryTypes.DELETE,
            replacements: {empID:empID},
        })
        res.status(200).send(`Employee deleted successfully`);
    }catch(error){
        res.status(400).send(`${error}`);
    }
};


exports.employeesByDptID = async(req, res, next)=>{
    const { dptID } = req.params;
    try{
       const result = await sequelize.query("SELECT dbo.Employees.dptID, dbo.Employees.empName, dbo.Employees.empEmail, dbo.Employees.empAge FROM dbo.Employees INNER JOIN dbo.Departments ON dbo.Employees.dptID = dbo.Departments.dptID WHERE dbo.Departments.dptID=:dptID",{
            type: QueryTypes.SELECT,
            replacements: {dptID :dptID},
        })
        res.status(200).send(result);
        console.log('print the result', JSON.stringify(result),dptID);
    }catch(error){
        console.log('print the error', error);
        res.status(400).send(`${error}`);
    }
}