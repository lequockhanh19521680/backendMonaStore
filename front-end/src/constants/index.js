
export const PRODUCT_STATUS = {
    delivered: 'Delivered',
    pending: 'Pending',
    processing: 'Processing',
    cancel:'Cancel',
}

export const PRODUCT_STATUS_COLOR = {
    delivered: '#0e9f6e',
    pending: '#3f83f8',
    processing:'#ff5a1f',
    cancel: '#c43c3d',
}

export const COUPON_STATUS = {
    expired: {
        label: 'Expired',
        color: '#9b1c1c',
    },
    active: {
        label: 'Active',
        color: '#00BDD9'
    }
}

export const STAFF_ROLE = {
    admin: 'Admin',
    ceo: 'CEO',
    manager: 'Manager',
    accountant: 'Accountant',
    'delivery_person': 'Delivery person',
}

export const ORDER_TYPE = {
    ASC: 'asc',
    DESC: 'desc',
}

export const SORT_PRODUCT_PRICE = {
    LOWEST_PRICE: {
        label: 'Low to High',
        value: 'LOWEST_PRICE',
        field: 'price',
        type: ORDER_TYPE.ASC,
    },
    HIGHEST_PRICE: {
        label: 'High to Low',
        value: 'HIGHEST_PRICE',
        field: 'price',
        type: ORDER_TYPE.DESC,
    },
}