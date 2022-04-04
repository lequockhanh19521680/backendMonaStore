import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Tooltip from '../../components/Tooltip/Tooltip';
import { AlertCircle } from 'react-feather'
import classnames from 'classnames'
export default function Login() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [isValidEmail, setIsValidEmail] = useState(true)
  const [isValidPass, setIsValidPass] = useState(true)

  const validateEmail = () => {
    let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email?.match(mailformat)) {
      setIsValidEmail(true)
      console.log(isValidEmail)
    }
    else {
      setIsValidEmail(false)
    }
  }

  return (
    <div className="w-screen h-screen bg-[url('/public/images/home/bg_nhanxet.jpg')] bg-cover bg-center">
      <div className="w-full h-full bg-dark">
        <div className="w-[500px] mx-auto py-20">
          <h1 className="text-white text-4xl text-center mb-10 font-medium">Đăng nhập</h1>
          <form className="">
            <div className="relative  mb-8">
              <input
                className="w-full border border-gray-300 px-3 py-3"
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setEmail(e.target.value)
                  validateEmail()
                }}
              />
              <Tooltip
                className="absolute top-1/2 transform -translate-y-1/2 -right-10 text-red-500"
                classNameTooltip="left-full bottom-1/2 transform translate-y-1/2 translate-x-2"
                tooltip={<p>abcbcbd</p>}
                isShow={!isValidEmail}
              >
                <AlertCircle />
              </Tooltip>
            </div>

            <div className="relative  mb-8">
              <input
                className="w-full border border-gray-300 px-3 py-3 mb-5"
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setEmail(e.target.value)
                  validateEmail()
                }}
              />
              <Tooltip
                className="absolute top-1/2 transform -translate-y-1/2 -right-10 text-red-500"
                classNameTooltip="left-full bottom-1/2 transform translate-y-1/2 translate-x-2"
                tooltip={<p>abcbcbd</p>}
              >
                <AlertCircle />
              </Tooltip>
            </div>
            <div className="text-center ">
              <Link to="/" className="underline text-white ">Quên mật khẩu?</Link>
            </div>
            <button className="w-full py-3 bg-black-1 hover:bg-black-2 text-white mt-8 font-medium text-xl">Đăng nhập</button>
          </form>
          <div className="text-center text-white mt-5">
            <Link to="/dang-ki" className="underline">Tạo tài khoản</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
