const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/auth')
const userController = require('../controllers/userController');

//o day chuyen den router de get va post data trong mongo
router.get('/',verifyToken,userController.getUser)
router.get('/getAll',userController.getAllUser)
router.post('/login',userController.Login)
router.post('/register',userController.Register)

router.patch('/changeAdmin/:id',userController.changeRoleAdmin)
router.patch('/changeCustomer/:id',userController.changeRoleCustomer)


module.exports = router