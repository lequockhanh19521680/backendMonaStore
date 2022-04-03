const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const couponSchema = new mongoose.Schema({
    productId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
    },
    name:{
        type:String,
        default:''
    },
    code:{
        type:Number,
        min:0,
        max: 999,
        default: Math.floor(Math.random())
    },
    value:{
        type: Number,
        min:1,
        max:100,
        default:1,
    },
    startDate:
    {
        type:Date,
        default:Date.now,
    },
    amount:{
        type:Number,
        min:0,
        default:0,
    },
    endDate:{
        type:Date,
        default: new Date(0,0,0)
    }

})

module.exports = mongoose.model('Coupon',couponSchema);
