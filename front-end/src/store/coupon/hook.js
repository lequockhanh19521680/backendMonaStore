import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchCoupon, fetchListCoupon } from './index'
import { useParams } from 'react-router-dom'

export const useListCoupon = () => useSelector((state) => state.coupon.listCoupon)

export const useCoupon = () => useSelector((state) => state.coupon.coupon)

export const useFetchListCoupon = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchListCoupon())
    }, [])
}

export const useFetchCoupon = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchCoupon(id))
    }, [])

}