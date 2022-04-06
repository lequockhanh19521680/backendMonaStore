const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//o day chuyen den router de get va post data trong mongo
router.get('/',productController.getAllProduct)
router.get('/type/:id',productController.getTypeByIdTypeProduct)
router.get('/classification/:id',productController.getProductFromType)
router.get('/sort',productController.sortProduct)

router.get('/:id',productController.findProductFromId)




router.post('/',productController.addProduct)

router.patch('/:id',productController.setProduct)




module.exports = router