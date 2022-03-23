const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true

    },
    isTeacher:
    {
        type: Boolean,
        required: true

    },
    isSelect:
    {
        type: Boolean,
        required: true

    }
})
module.exports = mongoose.model('User',userSchema);
