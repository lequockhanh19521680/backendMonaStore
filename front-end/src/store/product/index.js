import { createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'

const initialState = {
    products: undefined,
    product: undefined,
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProducts: (state, action) => {
            state.products = action.payload
        },
        setProduct: (state,action) => {
            state.product = action.payload
        }
    }
})

export const fetchProducts = () => async (dispatch) => {
    try {
        const response = await productApi.getProducts()
        dispatch(setProducts(response))
    } catch (error) {
        console.log(error)
    }
}

export const {
    setProducts,
    setProduct
} = productSlice.actions

export default productSlice.reducer