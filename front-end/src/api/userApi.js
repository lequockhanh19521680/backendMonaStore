import axiosClient from './axiosClient'

const userApi = {
    getUser: (id) => {
        const url = `/user/${id}`
        return axiosClient.get(url)
    },
    getAllUsers: () => {
        const url = "/user/getAll"
        return axiosClient.get(url)
    },
    postUser: (body) => {
        const url = '/user'
        return axiosClient.post(url, {...body}) 
    },
    editUser: (id,body) => {
        const url = `/user/${id}`
        return axiosClient.patch(url, {...body})
    },
    deleteUser: (id) => {
        const url = `/user/${id}`
        return axiosClient.delete(url)
    },
    login: (body) => {
        const url ='/user/login'
        return axiosClient.post(url, {...body})
    },
    register: (body) => {
        const url = '/user/register'
        return axiosClient.post(url, {...body})
    },
    getStaff: () => {
        const url = '/user/isStaff'
        return axiosClient.get(url)
    },
    getAllCustomers: () => {
        const url = '/user/customers'
        return axiosClient.get(url)
    }
}

export default userApi