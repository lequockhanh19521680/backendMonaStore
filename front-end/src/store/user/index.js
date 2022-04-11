import { createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

const initialState = {
    users: undefined,
    user: undefined,
    allStaff: undefined,
    allCustomers: undefined
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload
        },
        setUser: (state, action) => {
            state.user = action.payload
        },
        setAllStaff: (state,action) => {
            state.allStaff = action.payload
        },
        setAllCustomers: (state, action) => {
            state.allCustomers = action.payload
        }
    }
})

export const fetchAllUsers = () => async (dispatch) => {
    try {
        const response = await userApi.getAllUsers()
        dispatch(setUsers(response))
    } catch (error) {
        console.log(error)
    }
}

export const fetchUser = (id) => async (dispatch) => {
    try {
        const response = await userApi.getUser(id)
        dispatch(setUser(response))
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllStaff = () => async (dispatch) => {
    try {
        const response = await userApi.getStaff()
        dispatch(setAllStaff(response))
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllCustomers = () => async (dispatch) => {
    try {
        const response = await userApi.getAllCustomers()
        dispatch(setAllCustomers(response))
    } catch (error) {
        console.log(error)
    }
}

export const {
    setUsers,
    setUser,
    setAllStaff,
    setAllCustomers
} = userSlice.actions

export default userSlice.reducer
