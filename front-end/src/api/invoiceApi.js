import axiosClient from './axiosClient'

const invoiceApi = {
    getListInvoice: () => {
        const url = ""
        return axiosClient.get(url)
    }
}

export default invoiceApi