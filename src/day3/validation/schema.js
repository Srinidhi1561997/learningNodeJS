const Joi = require('joi');

const employeeSchema = Joi.object({
    empName: Joi.string().required().min(2).max(29).pattern(new RegExp('^[A-Za-z][A-Za-z. ]{2,29}$')),
    empAge: Joi.number().required(),
    empEmail: Joi.string().required().email()
});

const employeeUpdateSchema = Joi.object({
    empName: Joi.string().min(2).max(29).pattern(new RegExp('^[A-Za-z][A-Za-z. ]{2,29}$')),
    empAge: Joi.number(),
    empEmail: Joi.string().email()
});

const departmentSchema = Joi.object({
    dptName: Joi.string().required().min(2).max(29).pattern(new RegExp('^[A-Za-z][A-Za-z. ]{2,29}$')),
    dptEmail: Joi.string().required().email()
});

const departmentUpdateSchema = Joi.object({
    dptName: Joi.string().min(2).max(29).pattern(new RegExp('^[A-Za-z][A-Za-z. ]{2,29}$')),
    dptEmail: Joi.string().email()
});

module.exports = {employeeSchema,employeeUpdateSchema,departmentSchema,departmentUpdateSchema};
