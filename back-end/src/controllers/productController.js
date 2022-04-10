const { query, response } = require('express');
const productSchema = require('../models/products')
const typeProductSchema = require('../models/typeProducts')

class ProductController {

    async getAllProductType(req,res,next){
        try{
        const findProduct = await typeProductSchema.find().select()
        res.send(findProduct)
        }catch(err){
            console.log(err)
        }

    }
    


    async getProductTypeById(req,res,next){
        try{
        const _id = req.params.id;
        const findProduct = await typeProductSchema.find({"_id": _id })
        res.send(findProduct)
        }catch(err){
            console.log(err)
        }
    }

    async getProductFromType(req,res){
        try {
            const findProduct = await productSchema.find(req.query)
            res.send(findProduct)
            console.log(key)
        } catch (error) {
            console.log(error)
            console.log(key)
        }

    }

    async findProductFromId(req,res){
        const _id = req.params.id
        try{
        const product = await productSchema.findById(_id)
        res.send(product)
        }catch(err)
        {
            console.log(err)
        }
    }


    //Ham lay du lieu tu database
    async getAllProduct(req, res, next) {
        try {
            const product = await productSchema.find()
            res.send(product)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    //sort get
    /*
    async getAllProductSortCreateAtIncrease(req, res, next) {
        try {
            const products = await productSchema.find().sort({createAt:1})
            res.send(products)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }



    async getAllProductSortCreateAtDecrease(req, res, next) {
        try {
            const products = await productSchema.find().sort({createAt:-1})
            res.send(products)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }

    async getAllProductSortPriceDecrease(req, res, next) {
        try {
            const products = await productSchema.find().sort({price:-1})
            res.send(products)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }

    async getAllProductSortPriceIncrease(req, res, next) {
        try {
            const products = await productSchema.find().sort({price:1})
            res.send(products)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }
    */
    async sortProduct(req,res){
        const name = req.query.name
        const desc = req.query.desc
        try{
            const sortObject = {}
            sortObject[name] = desc
        

            const products = await productSchema.find().sort(sortObject)
          
            console.log(sortObject)
            res.send(products)
        }
        catch(err){
            console.log(err)
        }
    }

    async addTypeProduct(req,res){
        const products = await new typeProductSchema({
            nameType: req.body.nameType,
            note: req.body.note
        })
        try{
            const temp = await products.save()
            res.send(temp)
        }catch(err)
        {
            console.log(err)
        }
    }

    async addProduct(req, res) {
        const products = await new productSchema({
            nameProduct: req.body.nameProduct,
            typeId: req.body.typeId,
            price: req.body.price,
            sale: req.body.sale,
            image: req.body.image,
            description: req.body.description,
            metal: req.body.metal,
            size: req.body.size,
            isPublished: req.body.isPublished
        })
        try {
            const temp = await products.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }

    async setProduct(req,res){
        try{
            const _id = req.params.id;
            const updateField = await productSchema.findByIdAndUpdate(_id,req.body)
            res.send(updateField)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }
    
    async setTypeProduct(req,res){
        try{
            const _id = req.params.id;
            const newProductType = await typeProductSchema.findByIdAndUpdate({_id}, req.body)
            res.send(newProductType)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }
    


    async deleteTypeProductById(req,res){
        const id = req.params.id
        try{
        const product = await typeProductSchema.deleteOne({_id: id})
        res.send(product)
        }catch(err)
        {
            console.log(err)
        }
    }

    async deleteProductById(req,res){
        const _id = req.params.id
        try{
        const product = await productSchema.findByIdAndDelete(_id)
        res.send(product)
        }catch(err)
        {
            console.log(err)
        }
    }


}

module.exports = new ProductController