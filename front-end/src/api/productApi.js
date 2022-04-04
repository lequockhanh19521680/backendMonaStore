import axiosClient from './axiosClient'

const productApi = {
    getProducts: () => {
        const url = '/product'
        return axiosClient.get(url)
    },
}

export default productApi