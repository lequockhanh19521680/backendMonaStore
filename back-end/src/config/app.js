const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb+srv://khanh:khanh@cluster0.nhyli.mongodb.net/test'

const app = express()

mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connect

con.on('open', function(){
    console.log('connected...')

})