import { createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'

const initialState = {
    products: undefined,
    product: undefined,
    allProductType: undefined
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
        },
        setAllProductType: (state,action) => {
            state.allProductType = action.payload
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

export const fetchProduct = (id) => async (dispatch) => {
    try {
        const response = await productApi.getProduct(id)
        dispatch(setProduct(response))
    } catch (error) {
        console.log(error)
    }
} 

export const fetchProductsByType = (type) => async (dispatch) => {
    try {
        const response = await productApi.getProductByType(type)
        dispatch(setProducts(response))
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllProductType = () => async (dispatch) => {
    try {
        const response = await productApi.getAllProductType()
        dispatch(setAllProductType(response))
    } catch (error) {
        console.log(error)
    }
}

export const {
    setProducts,
    setProduct,
    setAllProductType
} = productSlice.actions

export default productSlice.reducer