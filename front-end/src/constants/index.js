
export const PRODUCT_STATUS = {
    delivered: {
        label: 'Delivered',
        value: 'Delivered',
    },
    pending: {
        label: 'Pending',
        value: 'Pending',
    },
    processing: {
        label: 'Processing',
        value: 'Processing',
    },
    cancel: {
        label: 'Cancel',
        value: 'Cancel',
    },
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
        value: 'Expired',
        color: '#9b1c1c',
    },
    active: {
        label: 'Active',
        value: 'Active',
        color: '#00BDD9'
    }
}

export const STAFF_ROLE = {
    admin: {
        label: 'Admin',
        value: 'Admin',
    },
    ceo: {
        label: 'CEO',
        value: 'CEO',
    },
    manager: {
        label: 'Manager',
        value: 'Manager',
    },
    accountant: {
        label: 'Accountant',
        value: 'Accountant',
    },
    'delivery_person': {
        label: 'Delivery person',
        value: 'Delivery person',
    },
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

export const SORT_PRODUCT_COST = {
    LOWEST_PRICE: {
        label: 'Low to High',
        value: 'LOWEST_PRICE',
        field: 'cost',
        type: ORDER_TYPE.ASC,
    },
    HIGHEST_PRICE: {
        label: 'High to Low',
        value: 'HIGHEST_PRICE',
        field: 'cost',
        type: ORDER_TYPE.DESC,
    },
}