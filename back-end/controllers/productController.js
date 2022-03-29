const productSchema = require('../models/products')

class ProductController {


    //Ham lay du lieu tu database
    async getAllProduct(req, res, next) {
        try {
            const products = await productSchema.find()
            res.send(products)
        }
        catch (err) {
            res.send({ message: err.message })
        }
    }


    async addProduct(req, res) {
        const products = await new productSchema({
            nameProduct: req.body.nameProduct,
            typeProduct: req.body.typeProduct,
            price: req.body.price,
            priceSale: req.body.priceSale,
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