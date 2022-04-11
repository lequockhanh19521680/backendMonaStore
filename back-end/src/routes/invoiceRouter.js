const express = require('express');
const router = express.Router();
const invoiceController = require('../controllers/invoiceController');

router.get('/user/:id',invoiceController.getUserId)
router.get('/',invoiceController.getAllInvoice)
router.get('/status',invoiceController.getInvoiceStatus)
router.get('/bestSeller',invoiceController.sortBestSeller)
router.post('/',invoiceController.addInvoice)
router.patch('/:id',invoiceController.setInvoice)
router.delete('/:id',invoiceController.deleteInvoiceFromId)



module.exports = router