const userRouter = require('./userRouter')
const newRouter = require('./newRouter')
const productRouter = require('./productRouter')
const questionRouter = require('./questionRouter')
function route(app) {
    app.use('/user', userRouter)
    app.use('/new',newRouter)
    app.use('/product',productRouter)
    app.use('/question',questionRouter)
}


module.exports = route