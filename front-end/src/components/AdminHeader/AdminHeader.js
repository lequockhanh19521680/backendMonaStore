import React from 'react'
import { FiBell } from "react-icons/fi";
import { Link } from 'react-router-dom'
export default function AdminHeader() {
  return (
    <div className="w-full flex justify-between bg-dark-1 pl-5 pr-56 py-3 sticky top-0 z-20">
       <Link to="/">
        <img src="/logo.png" width={150} alt="logo" />
      </Link>

        <button className="text-green-1 font-bold text-2xl">
            <i className='bx bxs-bell'></i>
        </button>
    </div>
  )
}
