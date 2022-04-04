import axiosClient from './axiosClient'

const productApi = {
    getProducts: () => {
        const url = '/product'
        return axiosClient.get(url)
    },
    postProduct: (params) => {
        const url = '/product'
        return axiosClient.post(url, {...params})
    },
    addToCart: (id) => {
        const url = ""
        return axiosClient.post(url, id)
    }
}

export default productApi