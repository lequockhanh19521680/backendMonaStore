const invoiceSchema = require('../models/invoice');
const userSchema = require('../models/user')
const productSchema = require('../models/products');
const invoice = require('../models/invoice');
class InvoiceController {
    

    async getCount(req,res){
        try {
            const findInvoice = await invoiceSchema.aggregate([
                {$group:{_id: "$status",
                count:{$sum: 1}}},
           
            ])
            const findInvoice2 = await invoiceSchema.aggregate([
                {$group:{_id:null,
                totalCount:{$sum: 1}}}
                ])
            res.send([findInvoice,findInvoice2])
        } catch (error) {
            console.log(error)
        }
    }

    async getTotalPending(req,res){
        try{
            const findInvoice = await invoiceSchema.aggregate([
                    {$match: {status: "PENDING"}},
                    {$group: {_id: null , 
                        total: {$sum: "$cost"}}}
                ])
                res.send(findInvoice)
        }catch(err){
            console.log(err)
        }
    }

    async getTotalProcessing(req,res){
        try{
            const findInvoice = await invoiceSchema.aggregate([
                    {$match: {status: "PROCESSING"}},
                    {$group: {_id: null , 
                        total: {$sum: "$cost"}}}
                ])
                res.send(findInvoice)
        }catch(err){
            console.log(err)
        }
    }

    async getTotalDELIVERED(req,res){
        try{
            const findInvoice = await invoiceSchema.aggregate([
                    {$match: {status: "DELIVERED"}},
                    {$group: {_id: null , 
                        total: {$sum: "$cost"}}}
                ])
                res.send(findInvoice)
        }catch(err){
            console.log(err)
        }
    }

    async getTotalCANCEL(req,res){
        try{
            const findInvoice = await invoiceSchema.aggregate([
                    {$match: {status: "CANCEL"}},
                    {$group: {_id: null , 
                        total: {$sum: "$cost"}}}
                ])
                res.send(findInvoice)
        }catch(err){
            console.log(err)
        }
    }


    async sortBestSeller(req,res){
        try {
            const findInvoice = await invoiceSchema.aggregate([
                {$group:{_id: "$productId",
                count:{$sum: 1}}
                },
                {$sort: {totalSale:-1}},
                {$limit: 8}
            ])
            res.send(findInvoice)
        } catch (error) {
            console.log(error)
        }
    }


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
    async getAllInvoice(req, res) {
        let query = req.query
        let querySort = []

        if (req.query.status) {
            query.status = req.query.status.toUpperCase()
        }

        if (req.query.textSearch) {
            query.address = {
                $regex: req.query.textSearch
            }
        }

        if(req.query.orderBy && req.query.order) {
            var orderBy, order
            orderBy = req.query.orderBy
            querySort.push(orderBy)
            order = req.query.order === 'asc' ? 1 : -1 
            querySort.push(order)
        }

        try {
            const invoices = await invoiceSchema.find(query).sort([querySort])
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
            productId: req.body.productId,
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
            const updateField = await invoiceSchema.findByIdAndUpdate(_id,req.body)
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