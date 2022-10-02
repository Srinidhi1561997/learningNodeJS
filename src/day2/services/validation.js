const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});

const createSchema = Joi.object({
    firstname: Joi.string().required().min(2).max(29),
    lastname: Joi.string().required().min(2).max(29),
    age: Joi.number().required().min(1).max(2),
    email: Joi.string().required()
});

const updateSchema = Joi.object({
    firstname: Joi.string().min(2).max(29),
    lastname: Joi.string().min(2).max(29),
    age: Joi.number().min(1).max(2),
    email: Joi.string()
});

const emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
const nameRegex = /^[A-Za-z][A-Za-z. ]{2,29}$/;
const ageRegex = /^[0-9]{1,2}$/;

const validateEmail=(email)=>{
 return emailRegex.test(email);
}

const validateName=(name)=>{
    return nameRegex.test(name);
}

const validateAge=(age)=>{
    return ageRegex.test(age);
}

const validateUserData=(req)=>{
  
    const {email,firstname,lastname,age}= req.body;
    const validEmail= validateEmail(email);
    const validFirstName = validateName(firstname);
    const validLastName = validateName(lastname);
    const validAge = validateAge(age);
    if(validEmail && validFirstName && validLastName && validAge){
        return true;
    } else return false;
}

exports.validateGet=(req,res,next)=>{
    const {email}= req?.params;
    if(email && validateEmail(email)){
        next();
    } else if(!email) next();
    else {
        res.status(400).send('Invalid Email')
    }
}

exports.validateCreate=(req,res,next)=>{
    const validData = validateUserData(req);
    if(validData){
        const validateBody = createSchema.validate(req.body).error;
        if(validateBody){
            next()
        }
    } else return res.status(400).send('Invalid data entered');
};

exports.validateUpdate=(req,res, next)=>{
    const {email}= req.params;
    console.log('update method')
    if(email && validateEmail(email)){
        next();
    } else if(!email) res.status(400).send('Email does not found');
    else {
        res.status(400).send('Invalid Email')
    }
}

exports.validateDelete=(req,res,next)=>{
    const {email}= req.params;
    if(email && validateEmail(email)){
        next();
    } else if(!email) res.status(400).send('Email does not found');
    else {
        res.status(400).send('Invalid Email')
    }
}