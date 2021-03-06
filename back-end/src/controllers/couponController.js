const couponSchema = require('../models/coupons')

class CouponController{
    async getAllCoupon(req, res) {
        try {
            const coupons = await couponSchema.find()
            res.send(coupons)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    
    async getAllQuery(req,res){
        try {
            const find = await couponSchema.find(req.query)
            res.send(find)
        } catch (error) {
            console.log(error)
        }
    }

    async findCouponFromId(req,res){
        const _id = req.params.id
        try{
        const coupon = await couponSchema.findById(_id)
        res.send(coupon)
        }catch(err)
        {
            console.log(err)
        }
    }

    /*
    
    
    
    POST
    
    
    
    
    
    */
    async addCoupon(req,res){
        const coupons = await new couponSchema({
            name: req.body.name,
            value: req.body.value,
            amout:req.query.amount,
            endDate:req.query.endDate,
        })
        try {
            const temp = await coupons.save()
            res.send(temp)
        } catch (err) {
            console.log(err)
        }
    }


    /* 
    
    
        PATCH
    
    
    
    
    */
    async setCoupon(req,res){
        try{
            const _id = req.params.id;
            const updateField = await couponSchema.findByIdAndUpdate(_id,req.query)
            res.send(updateField)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }

    /*
    DELETE    
    */
    async deleteCoupon(req,res){
        const _id = req.params.id
        try {
            const coupon = await couponSchema.findByIdAndDelete(_id)
            res.send(coupon)
        } catch (err) {
            console.log(err)
        }
    }

}
module.exports = new CouponController