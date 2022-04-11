import { createSlice } from '@reduxjs/toolkit'
import productApi from '../../api/productApi'
import commentApi from '../../api/commentApi'

const initialState = {
    products: undefined,
    product: undefined,
    allProductType: undefined,
    productType: undefined
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
        },
        setProductType: (state,action) => {
            state.productType = action.payload
        }
    }
})

export const fetchProducts = (params = {}) => async (dispatch) => {
    try {
        const response = await productApi.getProducts({...params})
        dispatch(setProducts(response))
    } catch (error) {
        console.log(error)
    }
}

export const fetchProduct = (id) => async (dispatch) => {
    try {
        const promise = [productApi.getProduct(id)] //, commentApi.getComment(id)
        const data = await Promise.all(promise)
        dispatch(setProduct({
            ...data?.[0],
           // comment: data?.[1]
        }))
        return data?.[0]
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

export const fetchProductType = (id) => async (dispatch) => {
    try {
        const response = await productApi.getProductType(id)
        dispatch(setProductType(response))
    } catch (error) {
        console.log(error)
    }
}

export const {
    setProducts,
    setProduct,
    setAllProductType,
    setProductType
} = productSlice.actions

export default productSlice.reducer