const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//o day chuyen den router de get va post data trong mongo
router.get('/',productController.getAllProduct)
router.get('/type/:id',productController.getTypeByIdTypeProduct)
router.get('/sortCreateAt/1',productController.getAllProductSortCreateAtIncrease)
router.get('/sortCreateAt/0',productController.getAllProductSortCreateAtDecrease)
router.post('/',productController.addProduct)




module.exports = router