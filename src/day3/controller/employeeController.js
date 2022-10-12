const Employee = require("../models/employee");

exports.allEmployee = async(req,res,next)=>{
    try{
        const employees = await Employee.findAll();
        res.status(200).send(employees);
    }catch(error){
        res.status(400).send(error.message)
    }
};

exports.getEmployee = async(req,res,next)=>{
    const { empID } = req.params;
    try{
        const employee = await Employee.findByPk(empID)
        res.status(200).send(employee);
        next();
    }catch(error){
        // console.log('print the error',dptID,error)
        res.status(400).send(`${error}`);
    }
};


exports.addEmployee = async(req, res, next)=>{
    try {
       await Employee.create(req.body);
        res.status(200).send(`${req.body.empEmail} added successfully`)
    } catch (error) {
        console.log('error is', error)
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
        await Employee.destroy({where:{empID}})
        res.status(200).send(`Employee deleted successfully`);
    }catch(error){
        res.status(400).send(`${error}`);
    }
};
