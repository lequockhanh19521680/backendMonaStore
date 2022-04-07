import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Table from '../../../components/Table/Table'
import ActionGroup from '../../../components/ActionGroup/ActionGroup';
import { Tab } from '@headlessui/react';
import userApi from '../../../api/userApi';
export default function Customers() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleDeleteCustomer = async (id) => {
        try {
            await userApi.deleteUser(id)
        } catch (err) {
            console.log(err)
        }
    }

    const columnsTable = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'JOINING DATE',
            accessor: 'date',
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
            Header: 'PHONE',
            accessor: 'phone',
        },
        {
            Header: 'ACTIONS',
            accessor: 'actions',
            Cell: data => {
                return <ActionGroup showEdit={false} showEye={false} onDelete={() => handleDeleteCustomer(data.row.original._id)} />
            }
        },
    ]

    const data = [
        {
            id: '1',
            date: '1',
            name: '3',
            email: '33@@@',
            phone: '3',
        }
    ]

    return (
        <AdminContainer className="h-screen">
            <p className="text-lg font-medium mb-6">
                Customers
            </p>

            <div className="p-5 w-full rounded-lg bg-dark-1 mb-5">
                <Input
                    className="border border-gray-400 rounded-lg text-md text-white"
                    onChange={handleChangeInput}
                    dark={1}
                    type="text"
                    placeholder="Search by name/email/phone"
                />
            </div>

            <Table
                data={data}
                columnsTable={columnsTable}
            />
        </AdminContainer>
    )
}
