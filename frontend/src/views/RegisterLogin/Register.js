import React from 'react'
import { Link } from 'react-router-dom';
export default function Register() {
  return (
    <div className="w-screen h-screen bg-[url('/public/images/home/bg_nhanxet.jpg')] bg-cover bg-center">
      <div className="w-full h-full bg-dark">
        <div className="w-[500px] mx-auto py-20">
          <h1 className="text-white text-4xl text-center mb-8">Đăng kí</h1>
          <form className="">
            <input className="w-full border border-gray-300 px-3 py-3 mb-5" type="text" placeholder="Name" />
            <input className="w-full border border-gray-300 px-3 py-3 mb-5" type="email" placeholder="Email" />
            <input className="w-full border border-gray-300 px-3 py-3 mb-5" type="text" placeholder="Phone" />
            <input className="w-full border border-gray-300 px-3 py-3 mb-5" type="password" placeholder="Password" />
            <button className="w-full h-[50px] bg-black-1 hover:bg-black-2 text-white mt-8">Đăng kí</button>
          </form>
          <div className="text-center text-white mt-5">
            <Link to="/login" className="underline">Đăng nhập</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
