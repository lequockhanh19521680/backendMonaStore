import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProduct, fetchProducts, fetchProductsByType, fetchAllProductType } from './index'
import { useParams } from 'react-router-dom'
export const useProducts = () => useSelector((state) => state.product.products)

export const useProduct = () => useSelector((state) => state.product.product)

export const useAllProductType = () => useSelector((state) => state.product.allProductType)

export const useFetchProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])
}

export const useFetchProductsByType = () => {
    const { type } = useParams()
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProductsByType(type))
    }, [])
}

export const useFetchProduct = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProduct(id))
    }, [])   
}

export const useFetchAllProductType = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllProductType())
    }, [])
}