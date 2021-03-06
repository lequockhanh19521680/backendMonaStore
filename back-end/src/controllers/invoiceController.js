const invoiceSchema = require('../models/invoice');
const userSchema = require('../models/user')
class InvoiceController {
    
    async getUserId(req,res,next){
        const _id = req.params.id;
        try {
            const findInvoice = await userSchema.find({"userId": _id })
            res.send(findInvoice)
        } catch (error) {
            console.log(error)
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

    async getInvoiceStatus(req,res){
        try {
            const findStatus = await invoiceSchema.find(req.query)
            res.send(findStatus)
            console.log(req.query)
        } catch (error) {
            console.log(error)
        }

    }




    async findInvoiceFromId(req,res){
        const _id = req.params.id
        try{
        const invoice = await invoiceSchema.findById(_id)
        res.send(invoice)
        }catch(err)
        {
            console.log(err)
        }
    }
   
    async addInvoice(req, res) {
        const invoices = await new invoiceSchema({
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
        try{
            const _id = req.params.id;
            const updateField = await invoiceSchema.findByIdAndUpdate(_id,req.query)
            res.send(updateField)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }

    
    async deleteInvoiceFromId(req,res){
        const _id = req.params.id
        try{
        const invoice = await invoiceSchema.findByIdAndDelete(_id)
        res.send(invoice)
        }catch(err)
        {
            console.log(err)
        }
    }
   
  
}

module.exports = new InvoiceController