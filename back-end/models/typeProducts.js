const mongoose = require('mongoose')
const typeProductSchema = new mongoose.Schema({
    nameType:{
        type: String,
        require: true,
        
    },
    typeId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'type'
    },
    note:{
        type: String,
        default: '',
    }
})

module.exports = mongoose.model('TypeProduct',typeProductSchema);
