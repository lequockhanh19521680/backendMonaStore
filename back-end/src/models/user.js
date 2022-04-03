
const mongoose = require('mongoose')
//model cua 1 user trong collection users cua mongodb
const userSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
    },
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
        enum:['ADMIN','SELLER','CEO','MANAGER','ACCOUNT','DELIVERY','CUSTOMER'],
        default: 'CUSTOMER',
    },
    cart:{
        Type: [mongoose.Schema.Types.ObjectId],
    },
    createAt:{
        type:Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema);
