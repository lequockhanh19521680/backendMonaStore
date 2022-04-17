import React, { useState, useEffect } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import ToggleButton from './../../../components/Button/ToggleButton';
import { Eye } from 'react-feather'
import ActionGroup from '../../../components/ActionGroup/ActionGroup'
import productApi from '../../../api/productApi'
import { fetchProducts } from './../../../store/product/index';
import { useDispatch } from 'react-redux'
import { useFetchProducts, useProducts, useFetchAllProductType, useAllProductType } from './../../../store/product/hook';
import { useUpdateQuery, useSearchData, useUpdateSearch } from '../../../store/search/hook'
import { updateSearchData } from '../../../store/search/index'
import { useNavigate } from 'react-router-dom'
import { SORT_PRODUCT_PRICE } from '../../../constants/index'
export const ShowDetail = () => {
    return (
        <button>
            <Eye className="hover:text-green-1" />
        </button>
    )
}

export default function Products() {
    useUpdateQuery()
    useFetchAllProductType()
    useUpdateSearch()
    const productTypes = useAllProductType()
    const searchData = useSearchData()
    const navigate = useNavigate()
    useFetchProducts()
    const products = useProducts()
    const dispatch = useDispatch()
    const [textSearch, setTextSearch] = useState()

    const handleChangeInput = (e) => {
        setTextSearch(e.target.value)
    }

    const updateFieldSearch = (field, value) => {
        dispatch(updateSearchData({ [field]: value }))
    }


    useEffect(() => {
        if (textSearch !== undefined) {
            updateFieldSearch('textSearch', textSearch)
        }
    }, [textSearch])

    useEffect(() => {
        setTextSearch(searchData?.textSearch)
    }, [])


    const updateProduct = () => {
        try {
            dispatch(fetchProducts())
        } catch (error) {
            console.log(error)
        }
    }

    const handleDeleteProduct = async (id) => {
        try {
            await productApi.deleteProduct(id)
            updateProduct()
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
            Header: 'PRODUCT NAME   ',
            accessor: 'nameProduct',
        },
        {
            Header: 'CATEGORY',
            accessor: 'typeId',
            Cell: data => {
                return (
                    <span>
                        {data?.row?.original?.typeId?.nameType}
                    </span>
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
                    <ActionGroup
                        showEye={false}
                        onDelete={() => handleDeleteProduct(data.row.original._id)}
                        onEdit={() => navigate(`/admin/products/edit-product/${data.row.original._id}`)}
                    />
                );
            }
        },
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
                    title="Product Type"
                    listDropdown={productTypes?.data}
                    label="nameType"
                    onSelect={(typeId) => {
                        updateFieldSearch('typeId', typeId)
                    }}
                />
                <Dropdown
                    title="Price"
                    listDropdown={Object.values(SORT_PRODUCT_PRICE)}
                    label="label"
                    onSelect={(item) => {
                        updateFieldSearch('sort', item)
                    }}
                />

                <button
                    className="bg-green-1 rounded-lg px-10 hover:bg-[#057a55]"
                    onClick={() => navigate('/admin/products/add-product')}
                >
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
