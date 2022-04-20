import React from 'react'
import { FiUsers, FiUser, FiGift, FiList, FiShoppingBag, FiGrid, FiCheckCircle, FiMessageCircle } from "react-icons/fi";
import { NavLink } from 'react-router-dom'
export default function AdminLeftMenu() {

    const leftMenu = [
        {
            icon: <FiGrid />,
            label: 'Dashboard',
            link: '/admin/dashboard',
        },
        {
            icon: <FiShoppingBag />,
            label: 'Products',
            link: '/admin/products',
        },
        {
            icon: <FiList />,
            label: 'Category',
            link: '/admin/category',
        },
        {
            icon: <FiUsers />,
            label: 'Customers',
            link: '/admin/customers',
        },
        {
            icon: <FiCheckCircle />,
            label: 'Orders',
            link: '/admin/orders',
        },
        {
            icon: <FiGift />,
            label: 'Coupons',
            link: '/admin/coupons',
        },
        {
            icon: <FiUser />,
            label: 'Our Staff',
            link: '/admin/our-staff',
        },
        // {
        //     icon: <FiMessageCircle />,
        //     label: 'News',
        //     link: '/admin/news',
        // },
    ]

    return (
        <div className="bg-dark-1 h-full w-[230px] overflow-hidden fixed">
            <ul className="py-10">
                {
                    leftMenu.map((item, index) => {
                        return (
                            <li className="" key={index}>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "pl-4 py-4 pr-20 border-l-4 rounded-tr-lg rounded-br-lg border-green-1 flex items-center font-medium text-md text-white opacity-100" : "hover:opacity-100 opacity-50 pl-4 py-4 pr-20 flex items-center font-medium text-md text-white"
                                }
                                    to={item.link}
                                >
                                    <div className="text-lg">
                                        {item.icon}
                                    </div>
                                    <span className="ml-3 font-mono">{item.label}</span>
                                </NavLink>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
