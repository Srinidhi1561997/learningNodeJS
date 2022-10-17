const express = require('express');
const router = express.Router();
const validation = require('../validation/validation');
const controller = require('../controller/departmentController');

router.get('/all',validation.validateGetAllDepartment, controller.allDepartment)
router.get('/getDpt/:dptID',validation.validateGetDepartment, controller.getDepartment)
router.post('/addDpt', validation.validatePostDepartment,controller.addDepartment)
router.put('/updateDpt/:dptID', validation.validatePutDepartment, controller.updateDepartment)
router.delete('/removeDpt/:dptID',validation.validateRemoveDepartment, controller.removeDepartment)

module.exports = router;
