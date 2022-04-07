import { createSlice } from "@reduxjs/toolkit";
import reportApi from '../../api/reportApi'

const initialState = {
    report: undefined,
}

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        setReport: (state, action) => {
            state.report = action.payload
        }
    }
})

export const fetchReport = () => async (dispatch) => {
    try {
        const response = await reportApi.getReport()
        dispatch(setReport(response))
    } catch (error) { }
}

export const {
    setReport
} = reportSlice.actions

export default reportSlice.reducer