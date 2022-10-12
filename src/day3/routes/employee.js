const express = require('express');
const router = express.Router();
const validation = require('../validation/validation');
const controller = require('../controller/employeeController');

router.get('/all',validation.validateGetAllEmployee, controller.allEmployee)
router.get('/getEmp/:empID',validation.validateGetEmployee, controller.getEmployee)
router.post('/addEmp', validation.validatePostEmployee,controller.addEmployee)
router.put('/updateEmp/:empID', validation.validatePutEmployee, controller.updateEmployee)
router.delete('/removeEmp/:empID',validation.validateRemoveEmployee, controller.removeEmployee)

module.exports = router;
