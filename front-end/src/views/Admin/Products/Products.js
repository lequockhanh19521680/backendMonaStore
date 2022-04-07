import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import ToggleButton from './../../../components/Button/ToggleButton';
import { Eye } from 'react-feather'
import ActionGroup from '../../../components/ActionGroup/ActionGroup'
import productApi  from '../../../api/productApi'
import { fetchProducts } from './../../../store/product/index';
import { useDispatch } from 'react-redux'
import { useFetchProducts, useProducts } from './../../../store/product/hook';
import LoadingPage from './../../../components/LoadingPage/Loading';
import { PRODUCT_TYPE } from '../../../constants/index'
export const ShowDetail = () => {
    return (
        <button>
            <Eye className="hover:text-green-1" />
        </button>
    )
}

export default function Products() {
    useFetchProducts()
    const products = useProducts()
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const updateProduct = () => {
        try {
            dispatch(fetchProducts())
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteProduct =  async (id) => {
        try {
            await productApi.deleteProduct(id)
            updateProduct()
        } catch (error) {
            console.log(error)
        }
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
            accessor: '_id',
        },
        {
            Header: 'PRODUCT NAME   ',
            accessor: 'nameProduct',
        },
        {
            Header: 'CATEGORY',
            Cell: data => {
                console.log(data.row.original.typeProductId)
                return (
                    <span>{PRODUCT_TYPE?.[data.row.original.typeProductId]}</span>
                )
            }
        },
        {
            Header: 'PRICE',
            accessor: 'price',
        },
        {
            Header: 'PRICE SALE',
            accessor: 'priceSale',
        },
        {
            Header: 'DETAILS',
            accessor: 'details',
            Cell: data => {
                return <ShowDetail />
            }
        },
        {
            Header: 'PUBLISHED',
            accessor: 'published',
            Cell: data => {
                return <ToggleButton isChecked={true} />
            }
        },
        {
            Header: 'ACTIONS',
            accessor: 'actions',
            Cell: data => {
                return (
                    <ActionGroup showEye={false} onDelete={() => handleDeleteProduct(data.row.original._id)} />
                );
            }
        },
    ]
    
    return (
        <AdminContainer className="">
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
            {
                products && (
                    <Table
                        data={products?.data}
                        columnsTable={columnsTable}
                    />
                )
            }
        </AdminContainer>
    )
}
