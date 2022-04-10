const express = require('express');
const router = express.Router();
const couponController = require('../controllers/couponController');

router.get('/',couponController.getAllQuery)
router.get('/:id',couponController.findCouponFromId)
router.post('/',couponController.addCoupon)
router.patch('/:id',couponController.setCoupon)
router.delete('/:id',couponController.deleteCoupon)



module.exports = router