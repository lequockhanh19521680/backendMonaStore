import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Table from './../../../components/Table/Table';
import ActionGroup from './../../../components/ActionGroup/ActionGroup';
import Badge from '../../../components/Badge/Badge'
export default function Coupons() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const columnsTable = [
        {
            Header: 'ID',
            accessor: 'id',
        },
        {
            Header: 'START DATE',
            accessor: 'start',
        },
        {
            Header: 'END DATE',
            accessor: 'end',
        },
        {
            Header: 'NAME',
            accessor: 'name',
        },
        {
            Header: 'CODE',
            accessor: 'code',
        },
        {
            Header: 'PERCENTAGE',
            accessor: 'percentage'
        },
        {
            Header: 'PRODUCT TYPE',
            accessor: 'product-type',
        },
        {
            Header: 'STATUS',
            accessor: 'status',
        },
        {
            Header: 'ACTIONS',
            accessor: 'action',
        },
    ]

    const data = [
        {
            id: '1',
            start: '2',
            end: '3',
            name: 'abc',
            code: '17',
            percentage: '20',
            'product-type': 'day chuyen',
            status: <Badge className="bg-red-500 text-sm-md px-2 font-medium">Expired</Badge>,
            action: <ActionGroup />
        }
    ]

  return (
      <AdminContainer className="overflow-hidden h-screen">
          <p className="text-lg font-medium mb-6">
              Coupons
          </p>

          <form className="p-5 w-full rounded-lg bg-dark-1 flex items-center mb-5">
              <Input
                  className="border border-gray-400 rounded-lg text-md text-white h-[42px] mr-5"
                  onChange={handleChangeInput}
                  dark={1}
                  type="text"
                  placeholder="Search by product name"
              />

              <button className="bg-green-1 rounded-lg hover:bg-[#057a55] w-1/4 h-[42px]">
                  <div className="flex items-center justify-center text-md h-full">
                      <i className='bx bx-plus mr-2'></i>
                      <span>Add Product</span>
                  </div>
              </button>
          </form>

          <Table 
              columnsTable={columnsTable}
              data={data}
          />
      </AdminContainer>
  )
}
