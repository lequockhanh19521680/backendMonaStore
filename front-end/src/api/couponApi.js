import axiosClient from './axiosClient'

const couponApi = {
    getListCoupon: () => {
        const url = "/coupon"
        return axiosClient.get(url)
    },
    getCoupon: (id) => {
        const url = `/coupon/${id}`
        return axiosClient.get(url)
    },
    deleteCoupon: (id) => {
        const url = `/coupon/${id}`
        return axiosClient.delete(url)
    },
    editCoupon: (id, body) => {
        const url = `/coupon/${id}`
        return axiosClient.patch(url, {...body})
    },
    postCoupon: (body) => {
        const url = '/coupon'
        return axiosClient.post(url, {...body})
    }
}

export default couponApi