
const mongoose = require('mongoose')
const bson = require('bson')
//model cua 1 user trong collection users cua mongodb
const userSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        default: new bson.ObjectId()
    },
    email:{
        type: String,
        require: true,
        unique: true,
    },
    nameAccount:{
        type: String,
        default: '',
    },
    password:{
        type: String,
        required: true,
    },
    phone:{
        type: String,
        default: ''
    },
    role:{
        type: String,
        require: true,
        enum:['ADMIN','SELLER','CEO','MANAGER','ACCOUNT','DELIVERY','CUSTOMER'],
        default: 'CUSTOMER',
    },
    cart:{
        Type: [String],
    },
    createAt:{
        type:Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema);
