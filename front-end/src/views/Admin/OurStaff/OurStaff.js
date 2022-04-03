import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'

export default function OurStaff() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const listRole = [
        {
            label: 'Admin',
            value: '',
        },
        {
            label: 'CEO',
            value: '',
        },
        {
            label: 'Manager',
            value: '',
        },
        {
            label: 'Accountant',
            value: '',
        },
        {
            label: 'Delivery Person',
            value: '',
        },
    ]

    return (
        <AdminContainer>
            <p className="text-lg font-medium mb-6">
                All Staff
            </p>

            <div className="p-5 w-full rounded-lg bg-dark-1 flex items-center">
                <div className="grid grid-cols-2 w-4/5 mr-5 gap-x-5">
                    <Input
                        className="border border-gray-400 rounded-lg text-md text-white"
                        onChange={handleChangeInput}
                        dark={1}
                        type="text"
                        placeholder="Search by product name"
                    />

                    <Dropdown
                        title="Staff Role"
                        listDropdown={listRole}
                    />
                </div>

                <button className="bg-green-1 rounded-lg px-10 hover:bg-[#057a55] w-1/5 h-[42px]">
                    <div className="flex items-center justify-center text-md">
                        <i className='bx bx-plus mr-2'></i>
                        <span className="whitespace-nowrap">Add Staff</span>
                    </div>
                </button>
            </div>
        </AdminContainer>
    )
}