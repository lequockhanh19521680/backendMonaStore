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

    async addProduct(req, res) {
        const products = await new productSchema({
            nameProduct: req.body.nameProduct,
            typeProductId: req.body.typeProductId,
            price: req.body.price,
            sale: req.body.sale,
            image: req.body.image,
            description: req.body.description,
        })
        try {
            const temp = await products.save()
            res.json(temp)
        } catch (err) {
            res.send('Error' + err)
        }
    }
}

module.exports = new ProductController