import axiosClient from "./axiosClient";

const reportApi = {
    getReport: () => {
        const url = ""
        return axiosClient.get(url)
    }
}

export default reportApi