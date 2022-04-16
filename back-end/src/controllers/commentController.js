const commentSchema = require('../models/comments')
class commentController{
    async getAllComment(req, res, next) {
        try {
            const comment = await commentSchema.find()
            res.send(comment)
        }
        catch (err) {
            throw new Error(err)
        }
    }
    async addComment(req, res) {
        const comment = await new commentSchema({
            productId: req.body.productId,
            userID: req.body.userID,
            content: req.body.content,
            star: req.body.star,
        })
        try {
            const temp = await questions.save()
            res.json(temp)
        } catch (err) {
            throw new Error(err)
        }
    }
    async findCommentFromId(req,res){
        const _id = req.params.id
        try{
        const comment = await commentSchema.findById(_id)
        res.send(comment)
        }catch(err)
        {
            throw new Error(err)
        }
    }
    async getCommentByIdProduct(req,res,next){
        try{
        const _id = req.params.id;
        const findComment = await commentSchema.find({"_id": _id })
        res.send(findComment)
        }catch(err){
            throw new Error(err)
        }
    }

    async setComment(req,res){
        try{
            const _id = req.params.id;
            const updateField = await commentSchema.findByIdAndUpdate(_id,req.query)
            res.send(updateField)
        }
        catch(err)
        {
            throw new Error(err)
        }
    }

    async deleteCommentFromId(req,res){
        const _id = req.params.id
        try{
        const comment = await commentSchema.findByIdAndDelete(_id)
        res.send(comment)
        }catch(err)
        {
            throw new Error(err)
        }
    }
}
module.exports = new commentController