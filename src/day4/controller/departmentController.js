const Department = require("../models/department");
const sequelize = require("../util/database");
const {QueryTypes} = require("sequelize");

exports.allDepartment = async(req,res,next)=>{
    try{
        const departments = await sequelize.query("SELECT * FROM dbo.Departments");
        res.status(200).send(departments);
    }catch(error){
        res.status(400).send(error.message)
    }
};

exports.getDepartment = async(req,res,next)=>{
    const { dptID } = req.params;
    try{
        // const department = await Department.findByPk(dptID)
        const department = await sequelize.query("SELECT * FROM dbo.Departments WHERE dptID = :dptID",{
            type: QueryTypes.SELECT,
            replacements: {dptID:dptID},
           })
        res.status(200).send(department);
        next();
    }catch(error){
        console.log('print the error',dptID,error)
        res.status(400).send(`${error}`);
    }
};


exports.addDepartment = async(req, res, next)=>{
    try {
    //    await Department.create(req.body);
       await sequelize.query("INSERT INTO dbo.Departments ([dptName], [dptEmail]) VALUES (?,?)",{
        type: QueryTypes.INSERT,
        replacements: [req.body.dptName, req.body.dptEmail],
       },)
        res.status(200).send(`${req.body.dptEmail} added successfully`)
    } catch (error) {
        console.log('log the error', error)
        res.status(400).send(`${req.body.dptEmail} not added`)
    }
};

exports.updateDepartment = async(req, res, next)=>{
    const { dptID } = req.params;
    try {
        // await Department.update(req.body,{where:{dptID}});
        await sequelize.query("UPDATE dbo.Departments SET dptID = :dptID")
        res.status(200).send(`Department updated successfully`)
    } catch (error) {
        res.status(400).send(`Department not updated`)
    }
};

exports.removeDepartment = async(req,res,next)=>{
    const { dptID } = req.params;
    try{
        // await Department.destroy({where:{dptID}})
        await sequelize.query("DELETE FROM dbo.Departments WHERE dptID = :dptID",{
            type: QueryTypes.DELETE,
            replacements: {dptID:dptID},
        })
        res.status(200).send(`Department deleted successfully`);
    }catch(error){
        res.status(400).send(`${error}`);
    }
};
