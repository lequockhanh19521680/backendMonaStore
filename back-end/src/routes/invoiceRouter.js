const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

//o day chuyen den router de get va post data trong mongo
router.get('/user/:id',invoiceController.getUserId)
router.get('/',invoiceController.getAllInvoice)
router.get('/status',invoiceController.getInvoiceStatus)
router.post('/',invoiceController.addInvoice)
router.patch('/:id',invoiceController.setInvoice)
router.delete('/:id',invoiceController.deleteInvoiceFromId)



module.exports = router