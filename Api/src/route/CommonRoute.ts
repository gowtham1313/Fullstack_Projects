const express = require('express');
const router = express.Router();

const commonController = require('../controller/CommonController');
router.post('/processSingle', commonController.processSingle);
router.post('/processMulti', commonController.processMulti);
router.post('/changeFieldName', commonController.changeFieldName);

module.exports = router;





