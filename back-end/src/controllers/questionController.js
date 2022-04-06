const questionSchema = require('../models/questions')


class QuestionCotroller {

        //Ham lay du lieu tu database
    async getAllQuestion(req, res, next) {
        try {
            const question = await questionSchema.find()
            res.send(question)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    async addQuestion(req, res) {
        const questions = await new questionSchema({
            productId: req.body.productId,
            question: req.body.question,
            answer: req.body.answer,
        })
        try {
            const temp = await questions.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }

}
module.exports = new QuestionCotroller