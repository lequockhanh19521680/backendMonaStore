import axiosClient from './axiosClient'

const newsApi = {
    getListNews: () => {
        const url = ""
        return axiosClient.get(url)
    }
}