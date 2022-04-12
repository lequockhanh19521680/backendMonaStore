const mongoose = require('mongoose')
const invoiceSchema = require('./invoice')
const productSchema = require('./products')
const invoiceController = require('../controllers/invoiceController')


const reportSchema = new mongoose.Schema({
    totalProcessing:{
        type: Number,
        default: function(req,res){
            const temp = invoiceSchema.aggregate([
                {$match: {status: "PROCESSING"}},
                {$group: {_id: null , total: {$sum: "$cost"}}}
            ])
            return temp[0].total
        }    
    },
    totalPending:{
        type: Number,
        default: function(req,res){
            const temp = invoiceSchema.aggregate([
                {$match: {status: "PENDING"}},
                {$group: {_id: null , total: {$sum: "$cost"}}}
            ])
            return temp[0].total
        } 
    },
    totalDelivered:{
        type: Number,
        default: function(req,res){
            const temp = invoiceSchema.aggregate([
                {$match: {status: "DELIVERED"}},
                {$group: {_id: null , total: {$sum: "$cost"}}}
            ])
            return temp[0].total
        } 
    }
})

module.exports = mongoose.model('Report',reportSchema);
