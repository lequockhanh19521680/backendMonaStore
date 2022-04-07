import { createSlice } from "@reduxjs/toolkit";
import newsApi from './../../api/newsApi';
const initialState = {
    news: undefined,
    listNews: undefined,
}

const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNews: (state, action) => {
            state.news = action.payload
        },
        setListNews: (state, action) => {
            state.listNews = action.payload
        }
    }
})

export const fetchNews = (id) => async (dispatch) => {
    try {
        const response = await newsApi.getNews(id)
        dispatch(setNews(response))
    } catch (error) {}
}

export const fetchListNews = () => async (dispatch) => {
    try {
        const response = await newsApi.getListNews()
        dispatch(setListNews(response))
    } catch (error) {}
}

export const {
    setListNews,
    setNews
} = newsSlice.actions

export default newsSlice.reducer