const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const questionSchema = new mongoose.Schema({
    productId:{
        type:String,
    },
    question:{
        type:String,
        default:'',
    },
    questionDate:{
        type:Date,
        default:Date.now,
    },
    answer:{
        type:String,
        default: '',
    },
    answerDate:{
        type:Date,
        default:Date.now,
    }
})

module.exports = mongoose.model('Question',questionSchema);
