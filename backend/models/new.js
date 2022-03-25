const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const newSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique: true,
    },
    content:{
        type: String,
        required: true,

    },
    image:{
        type:Array,
    },
    createAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('New',newSchema);
