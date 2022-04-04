import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import ToggleButton from './../../../components/Button/ToggleButton';
import { Eye } from 'react-feather'
import ActionGroup from '../../../components/ActionGroup/ActionGroup'
export const ShowDetail = () => {
    return (
        <button>
            <Eye className="hover:text-green-1" />
        </button>
    )
}

export default function Products() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const listDropdownCategory = [
        'Dây chuyền',
        'Nhẫn',
        'Bông tai',
        'Lắc tay',
        'Đồng hồ',
    ]

    const listDropdownFilter = [
        'Low to High',
        'High to Low',
    ]

    const columnsTable = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'PRODUCT NAME   ',
            accessor: 'product-name',
        },
        {
            Header: 'CATEGORY',
            accessor: 'category',
        },
        {
            Header: 'PRICE',
            accessor: 'price',
        },
        {
            Header: 'PRICE SALE',
            accessor: 'price-sale',
        },
        {
            Header: 'STATUS',
            accessor: 'status'
        },
        {
            Header: 'DISCOUNT',
            accessor: 'discount'
        },
        {
            Header: 'DETAILS',
            accessor: 'details'
        },
        {
            Header: 'PUBLISHED',
            accessor: 'published'
        },
        {
            Header: 'ACTIONS',
            accessor: 'actions'
        },
    ]

    const data = [
        {
            id: '1',
            'product-name': '2',
            category: '3',
            price: '4',
            'price-sale': '5',
            status: '6',
            discount: '7',
            details: <ShowDetail />,
            published: <ToggleButton />,
            actions: <ActionGroup showEye={false} />
        }
    ]


    return (
        <AdminContainer className="h-screen">
            <p className="text-lg font-medium mb-6">
                Products
            </p>

            <div className="p-5 w-full rounded-lg bg-dark-1 grid grid-cols-4 gap-x-5 mb-5">
                <Input
                    className="border border-gray-400 rounded-lg text-md text-white"
                    onChange={handleChangeInput}
                    dark={1}
                    type="text"
                    placeholder="Search by product name"
                />

                <Dropdown
                    title="Category"
                    listDropdown={listDropdownCategory}
                />
                <Dropdown
                    title="Price"
                    listDropdown={listDropdownFilter}
                />

                <button className="bg-green-1 rounded-lg px-10 hover:bg-[#057a55]">
                    <div className="flex items-center justify-center text-md">
                        <i className='bx bx-plus mr-2'></i>
                        <span>Add Product</span>
                    </div>
                </button>
            </div>

            <Table
                data={data}
                columnsTable={columnsTable}
            />
        </AdminContainer>
    )
}
