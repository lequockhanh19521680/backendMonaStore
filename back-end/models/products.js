const mongoose = require('mongoose')
const {typeProductSchema} = require('./typeProducts')

const productSchema = new mongoose.Schema({
    productId:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product'
    },
    nameProduct:{
        type: String,
        require: true,
    },
    typeProductId:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'type'
    },
    price:
    {
        type: Number,
        require: true,
        default: '0'
    },
    priceSale:
    {
        type: Number,
        require: true,
        default: '0'
    },
    image:
    {
        type:[String],
        default:''
    },
    description:
    {
        type:String,
        default: ''
    },
    createAt:
    {
        type: Date,
        require: true,
        default: Date.now,
    }


})

module.exports = mongoose.model('Product',productSchema);
