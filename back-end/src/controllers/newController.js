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
    // Ham them user vao database, trong do chi can them username vs password la dc, isTeacher va isSelect tu dong la false
    async addNew(req, res) {
        const news = await new newSchema({
            title: req.body.title,
            content: req.body.content,
            image: req.body.image,
        })
        try {
            const temp = await news.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }
    async setQuestion(req,res){

        try{
            const _id = req.params.id;
            const updateField = await newSchema.findByIdAndUpdate(_id,req.query)
            res.send(updateField)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }
    async deleteNewFromId(req,res){
        const _id = req.params.id
        try{
        const user = await newSchema.findByIdAndDelete(_id)
        res.send(user)
        }catch(err)
        {
            console.log(err)
        }
    }
    async findNewFromId(req,res){
        const _id = req.params.id
        try{
        const news = await newSchema.findById(_id)
        res.send(news)
        }catch(err)
        {
            console.log(err)
        }
    }
  
}

module.exports = new NewController