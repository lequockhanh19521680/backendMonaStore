const mongoose = require('mongoose')
const typeProductSchema = new mongoose.Schema({
    nameType:{
        type: String,
        require: true,
        unique: true,
        
    },
    typeId:{
        type: mongoose.Schema.Types.ObjectId,
        enum:['6242a20768f1c571729c5e9c','6242a21d68f1c571729c5ea1','6242a23f68f1c571729c5ea3','6242a24e68f1c571729c5ea5'],
        ref:'type',
        require: true,
    },
    note:{
        type: String,
        default: '',
    }
})

module.exports = mongoose.model('TypeProduct',typeProductSchema);
