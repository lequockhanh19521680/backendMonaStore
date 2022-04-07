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
export default function Category() {
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

    const listDropdownCategory = [
        'Dây chuyền',
        'Nhẫn',
        'Bông tai',
        'Lắc tay',
        'Đồng hồ',
    ]

    const columnsTable = [
        {
            Header: 'ID',
            accessor: 'typeId',
        },
        {
            Header: 'NAME',
            accessor: 'nameType',
        },
        {
            Header: 'ACTIONS',
            accessor: 'actions',
            Cell: data => {
                return <ActionGroup showEye={false} onDelete={() => handleDeleteProductType(data.row.original.typeId)}/>
            }
        }
    ]

  return (
      <AdminContainer className="h-screen">
          <p className="text-lg font-medium mb-6">
              Category
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
                      title="Category"
                      listDropdown={listDropdownCategory}
                  />
              </div>

              <button className="bg-green-1 rounded-lg px-10 hover:bg-[#057a55] w-1/5 h-[42px]">
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
