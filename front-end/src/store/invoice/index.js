import { createSlice } from "@reduxjs/toolkit";
import invoiceApi from './../../api/invoiceApi';

const initialState = {
    listInvoice: undefined,
    invoice: undefined
}

const invoiceSlice = createSlice({
    name: 'invoice',
    initialState,
    reducers: {
        setListInvoice: (state,action) => {
            state.listInvoice = action.payload
        },
        setInvoice: (state,action) => {
            state.invoice = action.payload
        }
    }
})

export const fetchInvoice = (id) => async (dispatch) => {
    try {
        const response = await invoiceApi.getInvoice(id)
        dispatch(setInvoice(response))
    } catch (error) { }
}

export const fetchListInvoice = () => async (dispatch) => {
    try {
        const response = await invoiceApi.getListInvoice()
        dispatch(setListInvoice(response))
    } catch (error) { }
}


export const {
    setInvoice,
    setListInvoice
} = invoiceSlice.actions

export default invoiceSlice.reducer
