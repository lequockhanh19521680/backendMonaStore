const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

//o day chuyen den router de get va post data trong mongo
router.get('/',productController.getAllProduct)
router.get('/type/:id',productController.getTypeByIdTypeProduct)
router.get('/sortCreateAt/1',productController.getAllProductSortCreateAtIncrease)
router.get('/sortCreateAt/0',productController.getAllProductSortCreateAtDecrease)
router.get('/sortPrice/1',productController.getAllProductSortPriceIncrease)
router.get('/sortPrice/0',productController.getAllProductSortPriceDecrease)
router.get('/:id',productController.findProductFromId)




router.post('/',productController.addProduct)

router.patch('/:id',productController.setProduct)




module.exports = router