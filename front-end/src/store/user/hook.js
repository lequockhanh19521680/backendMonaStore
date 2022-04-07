import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchUser, fetchUsers } from './index'
import { useParams } from 'react-router-dom'

export const useUsers = () => useSelector((state) => state.user.users)

export const useUser = () => useSelector((state) => state.user.user)

export const useFetchProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchUsers())
    }, [])
}

export const useFetchUser = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser(id))
    }, [])

}