const { employeeSchema, employeeUpdateSchema, departmentSchema,departmentUpdateSchema } = require('./schema');
const idRegex = /^[0-9]/;

// Department validation

const deptIdValidation=(deptID)=>{
    return idRegex.test(deptID);
}
exports.validateGetAllDepartment = (req,res,next)=>{
    try{
        next();
    }catch(error){
        res.status(400).send('No data to display');
    }
};

exports.validateGetDepartment=(req,res,next)=>{
    try{
        const {dptID} = req.params;
        const validDeptID = deptIdValidation(dptID);
        if(validDeptID) next();
        else{
            res.status(400).send(`Enter valid department id ${validDeptID} ${dptID}`);
        }
    }catch(error){
        res.status(400).send('Enter valid department id');
    }
};

exports.validatePostDepartment=(req,res,next)=>{
    try {
        const validDpt=departmentSchema.validate(req?.body).error;
        if(!validDpt)  next();
        else{
            res.status(400).send(validDpt.details[0].message)
        }   
    } catch (error) {
        res.status(400).send('Enter valid data');
    }
};

exports.validatePutDepartment=(req,res,next)=>{
    try {
        const validUpdateDpt=departmentUpdateSchema.validate(req?.body).error;
        console.log('valid department', validUpdateDpt)
        if(!validUpdateDpt)  next();
        else{
            res.status(400).send(validUpdateDpt.details[0].message)
        }   
    } catch (error) {
        res.status(400).send('Enter valid data');
    }
}

exports.validateRemoveDepartment=(req,res,next)=>{
    try{
        const {dptID} = req.params;
        const validDeptID = deptIdValidation(dptID);
        if(validDeptID) next();
        else{
            res.status(400).send(`Enter valid department id`);
            next(new Error("Enter valid department id"));
        }
    }catch(error){
        res.status(400).send('Enter valid department id');
        next(new Error("Enter valid department id"));
    }
};




// employee validation


const empIdValidation=(deptID)=>{
    return idRegex.test(deptID);
}

exports.validateGetAllEmployee = (req,res,next)=>{
    try{
        next();
    }catch(error){
        res.status(400).send('No data to display');
    }
};

exports.validateGetEmployee=(req,res,next)=>{
    try{
        const {empID} = req.params;
        const validEmpID = empIdValidation(empID);
        if(validEmpID) next();
        else{
            res.status(400).send(`Enter valid employee id ${validEmpID} ${empID}`);
        }
    }catch(error){
        res.status(400).send('Enter valid employee id');
    }
};

exports.validatePostEmployee=(req,res,next)=>{
    try {
        const validEmp=employeeSchema.validate(req?.body).error;
        if(!validEmp)  next();
        else{
            res.status(400).send(validEmp.details[0].message)
        }   
    } catch (error) {
        res.status(400).send('Enter valid data');
    }
};

exports.validatePutEmployee=(req,res,next)=>{
    try {
        const validUpdateEmp=employeeUpdateSchema.validate(req?.body).error;
        if(!validUpdateEmp)  next();
        else{
            res.status(400).send(validUpdateEmp.details[0].message)
        }   
    } catch (error) {
        res.status(400).send('Enter valid data');
    }
}

exports.validateRemoveEmployee=(req,res,next)=>{
    try{
        const {empID} = req.params;
        const validEmpID = empIdValidation(empID);
        if(validEmpID) next();
        else{
            res.status(400).send(`Enter valid employee id`);
            next(new Error("Enter valid employee id"));
        }
    }catch(error){
        res.status(400).send('Enter valid employee id');
        next(new Error("Enter valid employee id"));
    }
};


exports.validateGetEmpByDpt=(req,res,next)=>{
    try{
        const {dptID} = req.params;
        const validDeptID = deptIdValidation(dptID);
        if(validDeptID) next();
        else{
            res.status(400).send(`Enter valid department id ${validDeptID} ${dptID}`);
        }
    }catch(error){
        res.status(400).send('Enter valid department id');
    }
};