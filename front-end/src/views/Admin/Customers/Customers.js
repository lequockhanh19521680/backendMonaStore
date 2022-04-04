import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'

export default function Customers() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }


  return (
      <AdminContainer>
          <p className="text-lg font-medium mb-6">
              Customers
          </p>

          <div className="p-5 w-full rounded-lg bg-dark-1">
              <Input
                  className="border border-gray-400 rounded-lg text-md text-white"
                  onChange={handleChangeInput}
                  dark={1}
                  type="text"
                  placeholder="Search by product name"
              />
            </div>
      </AdminContainer>
  )
}
