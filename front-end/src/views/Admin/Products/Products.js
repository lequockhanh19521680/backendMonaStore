import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
export default function Products() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const listDropdownCategory = [
        {
            label: 'Dây chuyền',
            value: '',
        },
        {
            label: 'Nhẫn',
            value: '',
        },
        {
            label: 'Bông tai',
            value: '',
        },
        {
            label: 'Lắc tay',
            value: '',
        },
        {
            label: 'Đồng hồ',
            value: '',
        },
    ]

    const listDropdownFilter = [
        {
            label: 'Low to High',
            value: '',
        },
        {
            label: 'High to Low',
            value: '',
        },
    ]
    return (
        <AdminContainer>
            <p className="text-lg font-medium mb-6">
                Products
            </p>

            <div className="p-5 w-full rounded-lg bg-dark-1 grid grid-cols-4 gap-x-5">
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
        </AdminContainer>
    )
}
