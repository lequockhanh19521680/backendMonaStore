import axiosClient from './axiosClient'

const couponsApi = {
    getListCoupons: () => {
        const url = ""
        return axiosClient.get(url)
    }
}

export default couponsApi