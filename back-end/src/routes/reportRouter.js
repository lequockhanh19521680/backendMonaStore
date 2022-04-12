const express = require('express');
const router = express.Router();
const reportController = require('../controllers/reportController');

//o day chuyen den router de get va post data trong mongo
router.get('/',reportController.getAllReport)
router.post('/',reportController.addReport)

module.exports = router