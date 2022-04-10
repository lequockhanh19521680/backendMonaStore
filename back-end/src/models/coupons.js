const mongoose = require('mongoose');
const bson = require('bson')
const couponSchema = new mongoose.Schema({
    name:{
        type:String,
        default:''
    },
    code:{
        type: mongoose.Schema.Types.ObjectId,
        default: new bson.ObjectId()
    },
    value:{
        type: Number,
        min:1,
        max:100,
        default:1,
    },
    startDate:
    {
        type:Date,
        default:Date.now,
    },
    amount:{
        type:Number,
        min:0,
        default:0,
    },
    endDate:{
        type:Date,
        require: true,
    },
    status:{
        type: String,
        enum:['ACTIVE','EXPIRED'],
        default: function(){
            if((Date.now < this.endDate)  && (amout>0)) return "ACTIVE"
            else return "EXPIRED"
        },
    },

})

module.exports = mongoose.model('Coupon',couponSchema);
