
const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,

    },
    createAt:{
        type:Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema);
