import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Table from '../../../components/Table/Table'
import ActionGroup from '../../../components/ActionGroup/ActionGroup';
import { Tab } from '@headlessui/react';
import userApi from '../../../api/userApi';
import { useFetchAllCustomers, useAllCustomers } from '../../../store/user/hook' 
import { fetchAllCustomers } from '../../../store/user';
import { useDispatch } from 'react-redux';
import { formatDDMMYYYYHHmm } from '../../../utils/formatDatetime'

export default function Customers() {
    useFetchAllCustomers()
    const customers = useAllCustomers()
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const updateCustomers = () => {
        try {
            dispatch(fetchAllCustomers())
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteCustomer = async (id) => {
        try {
            await userApi.deleteUser(id)
            updateCustomers()
        } catch (err) {
            console.log(err)
        }
    }

    const columnsTable = [
        {
            Header: 'ID',
            accessor: '_id',
            Cell: data => {
                return <span>
                    {data?.row?.original?._id?.slice(0, 4)}...{data?.row?.original?._id?.slice(data?.row?.original?._id?.length - 4, data?.row?.original?._id?.length)}
                </span>
            }
        },
        {
            Header: 'JOINING DATE',
            accessor: 'createAt',
            Cell: data => {
                return <span>
                    {formatDDMMYYYYHHmm(data?.row.original.createAt)}
                </span>
            }
        },
        {
            Header: 'NAME',
            accessor: 'nameAccount',
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
                    placeholder="Search by name"
                />
            </div>

           {
               customers && (
                    <Table
                        data={customers?.data}
                        columnsTable={columnsTable}
                    />
               )
           }
        </AdminContainer>
    )
}
