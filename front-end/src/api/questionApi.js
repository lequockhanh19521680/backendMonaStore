import axiosClient from './axiosClient'

const questionApi = {
    getQuestionByProductId: (id) => {
        const url = `/question/product/${id}`
        return axiosClient.get(url)
    }
}

export default questionApi