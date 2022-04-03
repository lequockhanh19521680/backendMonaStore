const { query } = require('express');
const productSchema = require('../models/products')
const typeProductSchema = require('../models/typeProducts')

class ProductController {


    async getTypeByIdTypeProduct(req,res,next){
        const _id = req.params.id;
        const findProduct = await typeProductSchema.find({"typeId": _id })
        res.send(findProduct)
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
            const products = await productSchema.find().sort({name:desc})
            res.send(products)
            console.log(name)
            console.log(desc)
     
        }
        catch(err){
       
            console.log($name)
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
        const field = req.query;
        const value = req.query;
        const set = `${field} : ${value}`
        try{
            const _id = req.params.id;
            const updateField = await productSchema.findByIdAndUpdate(_id,set )
            res.send(updateField)
            console.log(set)
        }
        catch(err)
        {
            res.send('error' + err)
        }
    }
    async findProductFromId(req,res){
        const _id = req.params.id
        const product = await productSchema.findById(_id)
        res.send(product)
    }
}

module.exports = new ProductController