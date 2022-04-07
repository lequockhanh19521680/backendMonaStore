import axiosClient from './axiosClient'

const newsApi = {
    getListNews: () => {
        const url = "/new"
        return axiosClient.get(url)
    },
    getNews: (id) => {
        const url = `/new/${id}`
        return axiosClient.get(url)
    },
    postNews: (body) => {
        const url = "/new"
        return axiosClient.post(url, {...body})
    },
    deleteNews: (id) => {
        const url = `/new/${id}`
        return axiosClient.delete(url)
    },
    editNews: (id, body) => {
        const url = `/new/${id}`
        return axiosClient.patch(url, {...body})
    }
}

export default newsApi