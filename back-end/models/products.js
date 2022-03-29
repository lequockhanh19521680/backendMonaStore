const mongoose = require('mongoose')
const typeProductSchema = require('./typeProducts')

const productSchema = new mongoose.Schema({
    nameProduct:{
        type: String,
        require: true,
    },
    typeProductId:{
        type: mongoose.Schema.Types.ObjectId,
        enum:['6242a20768f1c571729c5e9c','6242a21d68f1c571729c5ea1','6242a23f68f1c571729c5ea3','6242a24e68f1c571729c5ea5'],
        require: true,
        ref:'type'
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
        min: '0',
        max: '100',
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
