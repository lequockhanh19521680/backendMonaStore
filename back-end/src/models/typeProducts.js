const mongoose = require('mongoose')
const bson = require('bson')
const typeProductSchema = new mongoose.Schema({
    typeId:{
        type: mongoose.Schema.Types.ObjectId,
        default: new bson.ObjectId()
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
