const userRouter = require('./userRouter')
const newRouter = require('./newRouter')
const productRouter = require('./productRouter')
const invoiceRouter = require('./invoiceRouter')
const questionRouter = require('./questionRouter')
const couponRouter = require('./couponRouter')
const reportRouter = require('./reportRouter')

function route(app) {
    app.use('/user', userRouter)
    app.use('/new',newRouter)
    app.use('/product',productRouter)
    app.use('/invoice',invoiceRouter)
    app.use('/question',questionRouter)
    app.use('/coupon',couponRouter)
    app.use('/report',reportRouter)
}


module.exports = route