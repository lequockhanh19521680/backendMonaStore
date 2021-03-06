const mongoose = require('mongoose')
const typeProductSchema = require('./typeProducts')
const bson = require('bson')
const productSchema = new mongoose.Schema({
    nameProduct:{
        type: String,
        require: true,
    },
    typeId:{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref:'TypeProduct'
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
