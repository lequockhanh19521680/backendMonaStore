const userRouter = require('./userRouter')
const newRouter = require('./newRouter')


function route(app) {
    app.use('/user', userRouter)
    app.use('/new',newRouter)
}


module.exports = route