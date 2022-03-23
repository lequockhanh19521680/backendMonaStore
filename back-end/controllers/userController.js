const userModel = require('../models/user')
const db = require('../config/index')
db.connect();
class UserController {
    
    async getAllUser(req, res, next) {
        try {
            const users = await userModel.find()
            res.send({users})
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }

    async addUser(req, res) {
        const user = await new userModel({
            username: req.body.username,
            password: req.body.password,
            isTeacher: false,
            isSelect: false
        })

        try {
            const temp = await userModel.save()
            res.json(temp)
        } catch (err) {
            res.send('Error')
        }
    }
}

module.exports = new UserController
