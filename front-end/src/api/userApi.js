import axiosClient from './axiosClient'

const userApi = {
    getUser: () => {
        const url = ""
        return axiosClient.get(url)
    },
}

export default userApi