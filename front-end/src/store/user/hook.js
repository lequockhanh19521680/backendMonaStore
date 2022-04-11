import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchUser, fetchAllUsers, fetchAllStaff, fetchAllCustomers } from './index'
import { useParams } from 'react-router-dom'

export const useUsers = () => useSelector((state) => state.user.users)

export const useUser = () => useSelector((state) => state.user.user)

export const useAllStaff = () => useSelector((state) => state.user.allStaff)

export const useAllCustomers = () => useSelector(state => state.user.allCustomers) 

export const useFetchProducts = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])
}

export const useFetchUser = () => {
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser(id))
    }, [])

}

export const useFetchAllStaff = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllStaff())
    }, [])
}

export const useFetchAllCustomers = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchAllCustomers())
    }, [])
}