import { useEffect } from 'react'
import { fetchReport } from './index'
import { useDispatch, useSelector } from 'react-redux';


export const useReport = () => useSelector((state) => state.report.report)

export const useFetchReport = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchReport())
    }, [])
}