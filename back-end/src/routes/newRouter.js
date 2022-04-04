const express = require('express');
const router = express.Router();
const newController = require('../controllers/newController');

//o day chuyen den router de get va post data trong mongo
router.get('/',newController.getAllNew)
router.post('/',newController.addNew)




module.exports = router