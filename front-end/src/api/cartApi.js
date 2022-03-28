import axiosClient from './axiosClient'

const cartApi = {
    getItem: () => {
        const url = ""
        return axiosClient.get(url)
    }
}

export default cartApi