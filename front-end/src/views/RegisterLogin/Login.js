import React from 'react'
import { Link } from 'react-router-dom';
export default function Login() {
  return (
    <div className="w-screen h-screen bg-[url('/public/images/home/bg_nhanxet.jpg')] bg-cover bg-center">
      <div className="w-full h-full bg-dark">
        <div className="w-[500px] mx-auto py-20">
          <h1 className="text-white text-4xl text-center mb-8">Đăng nhập</h1>
          <form className="">
            <input className="w-full border border-gray-300 px-3 py-3 mb-8" type="email" placeholder="Email"/>
            <input className="w-full border border-gray-300 px-3 py-3 mb-5" type="password" placeholder="Password"/>
            <div className="text-center ">
              <Link to="/" className="underline text-white ">Quên mật khẩu?</Link>
           </div>
           <button className="w-full h-[50px] bg-black-1 hover:bg-black-2 text-white mt-8">Đăng nhập</button>
          </form>
          <div className="text-center text-white mt-5">
            <Link to="/dang-ki" className="underline">Tạo tài khoản</Link>
         </div>
        </div>
      </div>
    </div>
  )
}
