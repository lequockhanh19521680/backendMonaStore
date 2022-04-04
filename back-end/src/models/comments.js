const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const commentSchema = new mongoose.Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'product'
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
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