const invoiceSchema = require('../models/invoice');
const userChema = require('../models/user')
class InvoiceController {
    
    async getUserId(req,res,next){
        const _id = req.params.id;
        try {
            const findInvoice = await userSchema.find({"userId": _id })
            res.send(findInvoice)
        } catch (error) {
            console.log(err)
        }
        
    }

    //Ham lay du lieu tu database
    async getAllInvoice(req, res, next) {
        try {
            const invoices = await invoiceSchema.find()
            res.send(invoices)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    // Ham them user vao database, trong do chi can them username vs password la dc, isTeacher va isSelect tu dong la false
    async addInvoice(req, res) {
        const invoices = await new newSchema({
            userId: req.body.userId,
            phone: req.body.phone ,
            address: req.body.address,
            cost: req.body.cost,
            paymemtMethod: req.body.paymemtMethod,
            status: req.body.status
        })
        try {
            const temp = await invoices.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }


    async setInvoice(req,res){
        const field = req.query.field;
        const value = req.query.value;
        try{
            const _id = req.params.id;
            const updateField = await invoiceSchema.findByIdAndUpdate(_id,{[field]: [value] })
            res.send(updateField)
            console.log(field)
            console.log(value)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }

    

   
  
}

module.exports = new InvoiceController