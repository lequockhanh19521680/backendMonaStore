import axiosClient from "./axiosClient";

const commentApi = {
    getCommentByProductId: (id) => {
        const url = `/comment/product/${id}`
        return axiosClient.get(url)
    }
}

export default commentApi