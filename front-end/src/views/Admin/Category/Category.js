import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'
import Table from '../../../components/Table/Table'
import ActionGroup from '../../../components/ActionGroup/ActionGroup'
export default function Category() {
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
            Header: 'ACTIONS',
            accessor: 'actions',
        }
    ]

    const data = [
        {
            id: '1',
            name: 'day chuyen',
            actions: <ActionGroup showEye={false} />
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

        <Table 
              columnsTable={columnsTable}
              data={data}
        />
      </AdminContainer>
  )
}
