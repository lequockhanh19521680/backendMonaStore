const { query } = require('express');
const productSchema = require('../models/products')
const typeProductSchema = require('../models/typeProducts')

class ProductController {


    async getTypeByIdTypeProduct(req,res,next){
        const _id = req.params.id;
        try{
        const findProduct = await typeProductSchema.find({"typeProductId": _id })
        res.send(findProduct)
        }catch(err)
        {
            console.log(err)
        }
    }

    async getProductFromType(req,res){
        const _id = req.params.id;
        try {
            const findProduct = await productSchema.find({"typeId": _id })
        } catch (error) {
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



    async addProduct(req, res) {
        const products = await new productSchema({
            nameProduct: req.body.nameProduct,
            typeProductId: req.body.typeProductId,
            price: req.body.price,
            sale: req.body.sale,
            image: req.body.image,
            description: req.body.description,
            metal: req.body.metal,
            size: req.body.size,
        })
        try {
            const temp = await products.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }

    async setProduct(req,res){
        const field = req.query.field;
        const value = req.query.value;
        try{
            const _id = req.params.id;
            const updateField = await productSchema.findByIdAndUpdate(_id,{[field]: [value] })
            res.send(updateField)
            console.log(field)
            console.log(value)
        }
        catch(err)
        {
            res.send('error' + err)
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
}

module.exports = new ProductController