const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const invoiceSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Product',
        required: true,
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
    amount:{
        type: Number,
        default: '0',
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
