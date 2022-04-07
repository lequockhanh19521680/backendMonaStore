import { createSlice } from "@reduxjs/toolkit";
import userApi from "../../api/userApi";

const initialState = {
    users: undefined,
    user: undefined,
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

export const {
    setUsers,
    setUser
} = userSlice.actions

export default userSlice.reducer
