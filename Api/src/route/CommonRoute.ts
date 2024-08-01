const express = require('express');
const router = express.Router();
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' });
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const commonController = require('../controller/CommonController');
router.post('/processSingle', commonController.processSingle);
router.post('/processMulti', commonController.processMulti);
// router.post('/changeFieldName', commonController.changeFieldName);
router.post('/changeFieldName', upload.fields([{ name: 'xsdFile', maxCount: 1 }, { name: 'namesFile', maxCount: 1 }]), commonController.editXsd);

module.exports = router;





