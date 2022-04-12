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

router.get('/totalPending',invoiceController.getTotalPending)
router.get('/totalDelivered',invoiceController.getTotalDELIVERED)
router.get('/totalProcessing',invoiceController.getTotalProcessing)
router.get('/getTypeStatus',invoiceController.getCount)

module.exports = router