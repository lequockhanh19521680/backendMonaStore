const mongoose = require('mongoose')
const shordId = require('short-id')
const typeProductSchema = new mongoose.Schema({
    typeId:{
        type: mongoose.Schema.Types.ObjectId,
        default: shordId.generate()
    },
    nameType:{
        type: String,
        require: true,
        unique: true,    
    },
    note:{
        type: String,
        default: '',
    }
})

module.exports = mongoose.model('TypeProduct',typeProductSchema);
