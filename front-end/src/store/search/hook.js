import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

import {
    setPageQuery,
    setPathName,
    setQuery,
    resetSearchData,
    setCanUpdateQuery
} from './index'
import { useQuery } from '../../utils'
import { useNavigate } from 'react-router-dom'
import { formatQueryProducts } from '../search/helper'
import { SORT_PRODUCT_PRICE } from '../../constants/index'
export const useSearchQuery = () => useSelector(state => state.search.query)

export const useSearch = () => useSelector(state => state.search)

export const useSearchData = () => useSelector((state) => state.search.data)

export const useCanUpdateQuery = () => useSelector((state) => state.search.canUpdateQuery)

export const usePathStoreQuery = () => useSelector((state) => state.search.pathName)

export const useUpdateQuery = () => {
    const dispatch = useDispatch()
    const searchData = useSearch()
    const searchStr = JSON.stringify(searchData)
    const canUpdateQuery = useCanUpdateQuery()
    const location = window.location.pathname

    useEffect(() => {
        if (canUpdateQuery) {
            const parseQuery = formatQueryProducts(searchStr)
            dispatch(setQuery(parseQuery))
        }
    }, [searchStr, canUpdateQuery])

    useEffect(() => {
        setTimeout(() => {
            dispatch(setPathName(location))
        }, 1000)
        return () => {
            dispatch(resetSearchData())
        }
    }, [])
}

export const formatDataSearchProducts = (search, query) => {
    try {
        let data = Object.assign({}, search?.data) || {}

        if (query?.order && query?.orderBy) {
            const orderValue = Object.values(SORT_PRODUCT_PRICE).find(
                (item) => item.field === query.order && item.type === query.orderBy,
            )
            if (orderValue) {
                data.sort = orderValue
            }
        }
    } catch (error) {
        console.log(error)
    }
}


export const useUpdateSearchProduct = () => {
    const dispatch = useDispatch()
    const query = useQuery()
    const search = useSearch()

    useEffect(() => {
        // if (JSON.stringify(query)?.length > 3) {
        //     const newData = formatDataSearchItems(search, query)
        //     dispatch(updateSearchData(newData?.data))
        //     dispatch(updateSearchItems(newData?.items))
        //     dispatch(setPageQuery(newData?.page))
        // }
        dispatch(setCanUpdateQuery(true))
    }, [JSON.stringify(query)])

    useEffect(() => {
        return () => {
            dispatch(setCanUpdateQuery(false))
        }
    }, [])
    
}