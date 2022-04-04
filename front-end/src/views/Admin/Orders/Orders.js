import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import { Eye } from 'react-feather'
import { PRODUCT_STATUS, PRODUCT_STATUS_COLOR } from '../../../constants/index'
export default function Orders() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const listDropdownStatus = [
        'Dây chuyền',
        'Nhẫn',
        'Bông tai',
        'Lắc tay',
        'Đồng hồ',
    ]

    const listDropdownLimits = [
        'Low to High',
        'High to Low',
    ]

    const columnsTable = [
        {
            Header: 'No',
            accessor: 'no',
        },
        {
            Header: 'TIME',
            accessor: 'time',
        },
        {
            Header: 'SHIPPING ADDRESS',
            accessor: 'address',
        },
        {
            Header: 'PHONE',
            accessor: 'phone',
        },
        {
            Header: 'METHOD',
            accessor: 'method',
        },
        {
            Header: 'AMOUNT',
            accessor: 'amount'
        },
        {
            Header: 'STATUS',
            accessor: 'status'
        },
        {
            Header: 'ACTION',
            accessor: 'action'
        },
        {
            Header: 'INVOICE',
            accessor: 'invoice'
        },
    ]

    const data = [
        {
            no: '1',
            time: 'Mar 28, 2022',
            address: 'Nagrig, Egypt',
            phone: '01957930034',
            'method': 'COD',
            amount: '$497.00',
            status: '5',
            action: <Dropdown title="Status"
                className="w-32"
                listDropdown={Object.values(PRODUCT_STATUS)} />,
            invoice: <button>
                <Eye width={20} />
            </button>
        }
    ]

    return (
        <AdminContainer className="h-screen">
            <p className="text-lg font-medium mb-6">
                Orders
            </p>

            <div className="p-5 w-full rounded-lg bg-dark-1 grid grid-cols-3 gap-x-5 mb-5">
                <Input
                    className="border border-gray-400 rounded-lg text-md text-white"
                    onChange={handleChangeInput}
                    dark={1}
                    type="text"
                    placeholder="Search by product name"
                />

                <Dropdown
                    title="Status"
                    listDropdown={Object.values(PRODUCT_STATUS)}
                />
                <Dropdown
                    title="Order limits"
                    listDropdown={listDropdownLimits}
                />
            </div>

            <Table
                columnsTable={columnsTable}
                data={data}
            />
        </AdminContainer>
    )
}
