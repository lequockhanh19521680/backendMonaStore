import axiosClient from './axiosClient'

const invoiceApi = {
    getListInvoice: () => {
        const url = "/invoice"
        return axiosClient.get(url)
    },
    getInvoice: (id) => {
        const url= `/invoice/${id}`
        return axiosClient.get(url)
    },
    postInvoice: (body) => {
        const url = "/invoice"
        return axiosClient.post(url, {...body})
    },
    deleteInvoice: (id) => {
        const url = `/invoice/${id}`
        return axiosClient.delete(url)
    },
    editInvoice: (id, body) => {
        const url = `/invoice/${id}`
        return axiosClient.patch(url, {...body})
    }
}

export default invoiceApi