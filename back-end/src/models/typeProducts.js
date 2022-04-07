const mongoose = require('mongoose')
const shordId = require('short-id')
const typeProductSchema = new mongoose.Schema({
    nameType:{
        type: String,
        require: true,
        unique: true,
        
    },
    typeId:{
        type: String,
        ref:'type',
        default: shordId.generate()
    },
    note:{
        type: String,
        default: '',
    }
})

module.exports = mongoose.model('TypeProduct',typeProductSchema);
