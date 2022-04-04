import { configureStore } from '@reduxjs/toolkit'

import productReducer from './product'

const store = configureStore({
    reducer: {
        product: productReducer
    }
})

export default store