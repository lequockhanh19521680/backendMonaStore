const mongoose = require('mongoose')
const productSchema = require('./products')
const userSchema = require('./user')
//model cua 1 user trong collection users cua mongodb
const commentSchema = new mongoose.Schema({
    productId:{
        type: String,
        ref:'Product'
    },
    userId:{
        type: String,
        ref:'User'
    },
    content:{
        type:String,
    },
    star:{
        type:Number,
        min:1,
        max:5,
    },
})

module.exports = mongoose.model('Comment',commentSchema);