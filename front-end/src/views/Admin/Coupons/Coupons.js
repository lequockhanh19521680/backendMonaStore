import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'

export default function Coupons() {
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }


  return (
      <AdminContainer>
          <p className="text-lg font-medium mb-6">
              Coupons
          </p>

          <form className="p-5 w-full rounded-lg bg-dark-1 flex items-center">
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
      </AdminContainer>
  )
}
