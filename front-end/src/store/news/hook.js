import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchNews, fetchListNews } from './index'
import { useParams } from 'react-router-dom'

export const useListNews = () => useSelector((state) => state.news.listNews)

export const useNews = () => useSelector((state) => state.news.news)

export const useFetchListNews = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchListNews())
    }, [])
}

export const useFetchNews = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchNews(id))
    }, [])

}