const express = require('express');
const router = express.Router();
const validation = require('../validation/validation');
const controler = require('../controller/departmentController');

router.get('/all',validation.validateGetAllDepartment, controler.allDepartment)
router.get('/getDpt/:dptID',validation.validateGetDepartment, controler.getDepartment)
router.post('/addDpt', validation.validatePostDepartment,controler.addDepartment)
router.put('/updateDpt/:dptID', validation.validatePutDepartment, controler.updateDepartment)
router.delete('/removeDpt/:dptID',validation.validateRemoveDepartment, controler.removeDepartment)

module.exports = router;
