const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const invoiceSchema = new mongoose.Schema({
    userId:{
        type: String,
        ref:'User'
    },
    productId:{
        type:String,
        ref:'Product'
    },
    phone:{
        type:String,
        default: ""
    },
    time:{
        type:Date,
        default:Date.now,
    },
    address:{
        type:String,
        default:""
    },
    cost:{
        type: Number,
        default:'0'
    },
    paymentMethod:{
        type:String,
        enum:['CODE','CARD'],
        default:'CARD',
    },
    status:{
        type:String,
        enum:['PENDING','DELIVERED','CANCEL','PROCESSING'],
        default:"PENDING"
    }
})

module.exports = mongoose.model('Invoice',invoiceSchema);
