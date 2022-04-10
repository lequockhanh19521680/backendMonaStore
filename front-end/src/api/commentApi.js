import axiosClient from "./axiosClient";

const commentApi = {
    getComment: (id) => {
        const url = `/comment/${id}`
        return axiosClient.get(url)
    }
}

export default commentApi