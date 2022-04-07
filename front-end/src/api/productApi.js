import axiosClient from './axiosClient'

const productApi = {
    getProducts: () => {
        const url = '/product'
        return axiosClient.get(url)
    },
    getProduct: (id) => {
        const url = `/product/${id}`
        return axiosClient.get(url)
    },
    postProduct: (body) => {
        const url = '/product'
        return axiosClient.post(url, {...body})
    },
    editProduct: (id, body) => {
        const url = `/product/${id}`
        return axiosClient.patch(url, {...body})
    },
    addToCart: (id) => {
        const url = ""
        return axiosClient.post(url, id)
    },
    getProductByType: (type) => {
        const url = ""
        return axiosClient.get(url, type)
    },
    deleteProduct: (id) => {
        const url = `/product/${id}`
        return axiosClient.delete(url)
    },
    getAllProductType: () => {
        const url = '/product/getAllProductType'
        return axiosClient.get(url)
    },
    deleteProductType: (id) => {
        const url = `/product/type/${id}`
        return axiosClient.delete(url)
    }

    
}

export default productApi