const mongoose = require('mongoose')
const typeProductSchema = require('./typeProducts')
const shordId = require('short-id')
const productSchema = new mongoose.Schema({
    productId:{
        type: String,
        ref:'product',
        default: shordId.generate(),
    },
    nameProduct:{
        type: String,
        require: true,
    },
    typeProductId:{
        type: String,
        enum:['6242a20768f1c571729c5e9c','6242a21d68f1c571729c5ea1','6242a23f68f1c571729c5ea3','6242a24e68f1c571729c5ea5'],
        require: true,
        ref:'type'
    },
    price:
    {
        type: Number,
        default: 0
    },
    sale:
    {
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    priceSale:
    {
        type:Number,
        default: function(){
            return this.price * (1- this.sale/100)
        }
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
    },
    metal:{
        type:String,
        default:''
    },
    size:{
        type:String,
        default:'',
    },
    isPublished:{
        type: Boolean,
        default: false,
    },
    })

module.exports = mongoose.model('Product',productSchema);
