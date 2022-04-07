import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import { Eye } from 'react-feather'
import { PRODUCT_STATUS, PRODUCT_STATUS_COLOR } from '../../../constants/index'
import { useDispatch } from 'react-redux';
import { useFetchListInvoice, useListInvoice } from '../../../store/invoice/hook'
import { fetchListInvoice } from '../../../store/invoice'
import LoadingPage from '../../../components/LoadingPage/Loading'
export default function Orders() {
    useFetchListInvoice()
    const listInvoice = useListInvoice()
    const [inputValue, setInputValue] = useState()
    const dispatch = useDispatch()
    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const updateInvoice = () => {
        try {
            dispatch(fetchListInvoice())
        } catch (err) {
            console.log(err)
        }
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
            accessor: '_id',
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
            accessor: 'paymentMethod',
        },
        {
            Header: 'AMOUNT',
            accessor: 'cost'
        },
        {
            Header: 'STATUS',
            accessor: 'status'
        },
        {
            Header: 'ACTION',
            accessor: 'action',
            Cell: data => {
                return <Dropdown title="Status"
                    className="w-32"
                    listDropdown={Object.values(PRODUCT_STATUS)} />
            }
        },
        {
            Header: 'INVOICE',
            accessor: 'invoice',
            Cell: data => {
                return <button>
                    <Eye width={20} className="hover:text-green-1"/>
                </button>
            }
        },
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


            {
                listInvoice && <Table
                    columnsTable={columnsTable}
                    data={listInvoice?.data}
                />
            }
        </AdminContainer>
    )
}
