const userRouter = require('./userRouter')
const newRouter = require('./newRouter')
const productRouter = require('./productRouter')

function route(app) {
    app.use('/user', userRouter)
    app.use('/new',newRouter)
    app.use('/product',productRouter)
}


module.exports = route