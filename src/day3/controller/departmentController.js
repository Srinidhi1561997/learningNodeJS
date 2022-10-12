const Department = require("../models/department");

exports.allDepartment = async(req,res,next)=>{
    try{
        const departments = await Department.findAll();
        res.status(200).send(departments);
    }catch(error){
        res.status(400).send(error.message)
    }
};

exports.getDepartment = async(req,res,next)=>{
    const { dptID } = req.params;
    try{
        const department = await Department.findByPk(dptID)
        res.status(200).send(department);
        next();
    }catch(error){
        console.log('print the error',dptID,error)
        res.status(400).send(`${error}`);
    }
};


exports.addDepartment = async(req, res, next)=>{
    try {
       await Department.create(req.body);
        res.status(200).send(`${req.body.dptEmail} added successfully`)
    } catch (error) {
        res.status(400).send(`${req.body.dptEmail} not added`)
    }
};

exports.updateDepartment = async(req, res, next)=>{
    const { dptID } = req.params;
    try {
        await Department.update(req.body,{where:{dptID}});
        res.status(200).send(`Department updated successfully`)
    } catch (error) {
        res.status(400).send(`Department not updated`)
    }
};

exports.removeDepartment = async(req,res,next)=>{
    const { dptID } = req.params;
    try{
        await Department.destroy({where:{dptID}})
        res.status(200).send(`Department deleted successfully`);
    }catch(error){
        res.status(400).send(`${error}`);
    }
};
