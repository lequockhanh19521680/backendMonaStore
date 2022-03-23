const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/index');
const cors = require('cors')

const db = require('./config/index')

const app = express();
const PORT = 8000;

app.use(express.urlencoded({
    extended: true
}))

app.use(express.json())

app.use(cors())

route(app)

db.connect()

app.listen(PORT, function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", PORT);
})