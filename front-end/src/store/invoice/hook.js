import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchInvoice, fetchListInvoice } from './index'
import { useParams } from 'react-router-dom'

export const useListInvoice = () => useSelector((state) => state.invoice.listInvoice)

export const useInvoice = () => useSelector((state) => state.invoice.invoice)

export const useFetchListInvoice = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchListInvoice())
    }, [])
}

export const useFetchInvoice = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchInvoice(id))
    }, [])

}