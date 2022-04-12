const reportSchema = require('../models/report')

class NewController {
    

    async getAllReport(req, res, next) {
        try {
            const reports = await reportSchema.find()
            res.send(reports)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }

    async addReport(req,res){
        const reports = new reportSchema()
        try {
            const temp = await reports.save()
            res.send(temp)
        } catch (err) {
            res.send(err)
        }
    }
}

module.exports = new NewController