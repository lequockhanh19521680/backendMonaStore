const express = require('express');
const router = express.Router();
const questionCotroller = require('../controllers/questionController')

//o day chuyen den router de get va post data trong mongo
router.get('/getAll',questionCotroller.getAllQuestion)
router.post('/add',questionCotroller.addQuestion)



module.exports = router