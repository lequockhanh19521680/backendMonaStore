const newSchema = require('../models/new')

class NewController {


    //Ham lay du lieu tu database
    async getAllNew(req, res, next) {
        try {
            const news = await newSchema.find()
            res.send(news)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    async getAllNewSortCreateAt(req,res,next) {
        try{
            const news = await newSchema.find().sort({createAt:1});
            res.send(news)
        }
        catch(err)
        {
            res.send({message: err.message})
        }
    }
    // Ham them user vao database, trong do chi can them username vs password la dc, isTeacher va isSelect tu dong la false
    async addNew(req, res) {
        const news = await new newSchema({
            username: req.body.title,
            password: req.body.content,
            image: req.body.image,
        })
        try {
            const temp = await news.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }
}

module.exports = new NewController