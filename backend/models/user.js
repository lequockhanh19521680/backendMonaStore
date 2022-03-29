
const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        require: true,
        unique: true,
    },
    nameAccount:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        require: true,
    },
    role:{
        type: String,
        require: true,
        enum:['ADMIN','CUSTOMER'],
        default: 'CUSTOMER',
    },
    createAt:{
        type:Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema);
