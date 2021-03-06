import { createSlice } from "@reduxjs/toolkit";
import couponApi from '../../api/couponApi';

const initialState = {
    coupon: undefined,
    listCoupon: undefined
}

const couponSlice = createSlice({
    name: 'coupon',
    initialState,
    reducers: {
        setListCoupon: (state,action) => {
            state.listCoupon = action.payload
        },
        setCoupon: (state,action) => {
            state.coupon = action.payload
        }
    }
})

export const fetchCoupon = (id) => async (dispatch) => {
    try {
        const response = await couponApi.getCoupon(id)
        dispatch(setCoupon(response))
    } catch (error) { }
}

export const fetchListCoupon = () => async (dispatch) => {
    try {
        const response = await couponApi.getListCoupon()
        dispatch(setListCoupon(response))
    } catch (error) { }
}

export const {
    setCoupon,
    setListCoupon
} = couponSlice.actions

export default couponSlice.reducer
