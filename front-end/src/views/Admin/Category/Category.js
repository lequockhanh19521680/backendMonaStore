import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import ActionGroup from '../../../components/ActionGroup/ActionGroup'
import { useFetchAllProductType, useAllProductType } from '../../../store/product/hook'
import LoadingPage from '../../../components/LoadingPage/Loading'
import productApi from '../../../api/productApi'
import { useDispatch } from 'react-redux'
import { fetchAllProductType } from '../../../store/product'
import { useNavigate } from 'react-router-dom'

export default function Category() {
    const navigate = useNavigate()
    useFetchAllProductType()
    const productTypes = useAllProductType()
    const [inputValue, setInputValue] = useState()
    const dispatch = useDispatch()
    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const updateProductType = async () => {
        try {
            dispatch(fetchAllProductType())
        } catch (err) {
            console.log(err)
        }
    }

    const handleDeleteProductType = async (id) => {
        try {
            await productApi.deleteProductType(id)
            updateProductType()
        } catch (error) {
            console.log(error)
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
            Header: 'NAME',
            accessor: 'nameType',
        },
        {
            Header: 'NOTE',
            accessor: 'note',
        },
        {
            Header: 'ACTIONS',
            accessor: 'actions',
            Cell: data => {
                return <ActionGroup showEye={false}
                    onEdit={() => navigate(`/admin/category/edit-category/${data.row.original._id}`)}
                    onDelete={() => handleDeleteProductType(data.row.original._id)} />
            }
        }
    ]

    return (
        <AdminContainer>
            <p className="text-lg font-medium mb-6">
                Category
            </p>

            <div className="p-5 w-full rounded-lg bg-dark-1 flex items-center mb-5">

                <button className="bg-green-1 rounded-lg px-10 hover:bg-[#057a55] w-1/5 h-[42px]"
                    onClick={() => navigate('/admin/category/add-category')}
                >
                    <div className="flex items-center justify-center text-md">
                        <i className='bx bx-plus mr-2'></i>
                        <span className="whitespace-nowrap">Add Category</span>
                    </div>
                </button>
            </div>


            {
                productTypes && <Table
                    columnsTable={columnsTable}
                    data={productTypes?.data}
                />
            }
        </AdminContainer>
    )
}
