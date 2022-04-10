const couponSchema = require('../models/coupons')

class CouponController{
    
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
        var integer = Math.floor(Math.random()* 1000)
        const coupons = await new couponSchema({
            name: req.body.name,
            value: req.body.value,
            amount:req.body.amount,
            code: integer,
            endDate:req.body.endDate,
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