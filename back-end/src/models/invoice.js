const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const invoiceSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    phone:{
        type:String,
        default: ""
    },
    time:{
        type:Date,
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
        default:'Chuyen khoan',
    },
    status:{
        type:String,
        enum:['PENDING','DELIVERED','CANCEL','PROCESSING'],
        default:"PENDING"
    }
})

module.exports = mongoose.model('Invoice',invoiceSchema);
