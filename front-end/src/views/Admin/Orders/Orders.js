import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Dropdown from '../../../components/Dropdown/Dropdown'

export default function Orders() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }
    const listDropdownStatus = [
        {
            label: 'Dây chuyền',
            value: '',
        },
        {
            label: 'Nhẫn',
            value: '',
        },
        {
            label: 'Bông tai',
            value: '',
        },
        {
            label: 'Lắc tay',
            value: '',
        },
        {
            label: 'Đồng hồ',
            value: '',
        },
    ]

    const listDropdownLimits = [
        {
            label: 'Low to High',
            value: '',
        },
        {
            label: 'High to Low',
            value: '',
        },
    ]


  return (
      <AdminContainer>
          <p className="text-lg font-medium mb-6">
              Orders
          </p>

          <div className="p-5 w-full rounded-lg bg-dark-1 grid grid-cols-3 gap-x-5">
              <Input
                  className="border border-gray-400 rounded-lg text-md text-white"
                  onChange={handleChangeInput}
                  dark={1}
                  type="text"
                  placeholder="Search by product name"
              />

              <Dropdown
                  title="Status"
                  listDropdown={listDropdownStatus}
              />
              <Dropdown
                  title="Order limits"
                  listDropdown={listDropdownLimits}
              />
          </div>
      </AdminContainer>
  )
}
