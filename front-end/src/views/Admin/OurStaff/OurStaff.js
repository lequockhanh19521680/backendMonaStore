import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import ActionGroup from '../../../components/ActionGroup/ActionGroup'
import userApi from './../../../api/userApi';
import StaffCard from './../../../components/Card/StaffCard';
import { useFetchAllStaff, useAllStaff } from '../../../store/user/hook' 
export default function OurStaff() {
    useFetchAllStaff()
    const allStaff = useAllStaff()
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleDeleteStaff = async (id) => {
        try {
            await userApi.deleteUser(id)
        } catch (err) { 
            console.log(err)
        }
    }

    const listRole = [
        'Admin',
        'CEO',
        'Manager',
        'Accountant',
        'Delivery Person',
    ]

    const columnsTable = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'NAME',
            accessor: 'name',
        },
        {
            Header: 'EMAIL',
            accessor: 'email',
        },
        {
            Header: 'CONTACT',
            accessor: 'contact',
        },
        {
            Header: 'JOINING DATE',
            accessor: 'join-date',
        },
        {
            Header: 'ROLE',
            accessor: 'role'
        },
        {
            Header: 'ACTIONS',
            accessor: 'actions',
            Cell: data => {
                return <ActionGroup showEye={false} onDelete={() => handleDeleteStaff(data.row.original._id)}/>
            }
        },
    ]

    const data = [
        {
            id: '1',
            name: '1',
            email: '@',
            contact: '19191',
            'join-date': '18/11/2000',
            role: 'admin',
        }
    ]

    return (
        <AdminContainer className="h-screen">
            <p className="text-lg font-medium mb-6">
                All Staff
            </p>

            <div className="p-5 w-full rounded-lg bg-dark-1 flex items-center mb-5">
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

           <div className="grid grid-cols-4 gap-x-4">
               {
                    allStaff?.data?.map((staff, index) => {
                        return <StaffCard user={staff} key={index} />
                    })
               }
           </div>
        </AdminContainer>
    )
}
