import React from 'react'
import { FiMail, FiClock, FiPhone, FiSearch, FiUser} from "react-icons/fi";
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import '../../styles/header.scss';
export default function Header() {

  const menu = [
    {
      displayName: 'Trang chủ',
      link: '/'
    },
    {
      displayName: 'Dây chuyền',
      link: '/'
    },
    {
      displayName: 'Bông tai',
      link: '/'
    },
    {
      displayName: 'Lắc tay',
      link: '/'
    },
    {
      displayName: 'Nhẫn bạc',
      link: '/'
    },
    {
      displayName: 'Liên hệ',
      link: '/'
    },
    {
      displayName: 'Giới thiệu',
      link: '/'
    },
  ]
  return (
    <div>
      <div className=" w-full bg-black-3">
        <div className="flex items-center justify-between py-2 mx-auto max-w-screen-xl">
         <div className="flex items-center">
            <div className="flex items-center text-white-1 px-2 border-r border-gray-600 text-sm-md font-medium">
              <FiMail className="mr-2" />
              <span className="uppercase">
                Contact
              </span>
            </div>
            <div className="flex items-center text-white-1 px-2 border-r border-gray-600 text-sm-md font-medium">
              <FiClock className="mr-2" />
              <span className="uppercase">
                08:00 - 17:00
              </span>
            </div>
            <div className="flex items-center text-white-1 px-2 border-r border-gray-600 text-sm-md font-medium">
              <FiPhone className="mr-2" />
              <span className="uppercase">
                076 922 0162
              </span>
            </div>
         </div>

         <Link to="/login" className="text-white text-2xl cursor-pointer">
            <FiUser />
         </Link>
        </div>
      </div>
      <div className="w-full bg-black-2">
        <Container className="justify-between py-5">
          <Link to="/">
            <img src="/logo.png" alt="logo" className="w-56"/>
          </Link>
          <ul className="flex items-center">
            {
              menu.map((item,index) => {
                return (
                  <li className="mr-4 text-md text-white-1 font-medium uppercase" key={index}>
                    <Link to={item.link} className="transition-all duration-100 ease-linear rounded hover:px-3 hover:py-2 hover:text-yellow-2 hover:border hover:border-dashed hover:border-yellow-2">
                      {item.displayName}
                    </Link>
                  </li>
                )
              })
            }
            <div className="cursor-pointer text-white-1 text-xl font-medium mr-6 transition-all duration-100 ease-linear rounded hover:px-3 hover:py-2 hover:text-yellow-2 hover:border hover:border-dashed hover:border-yellow-2">
              <FiSearch />
            </div>

            <div className="group relative cart-item text-white cursor-pointer flex items-center transition-all duration-100 ease-linear rounded hover:p-3 hover:text-yellow-2 hover:border hover:border-dashed hover:border-yellow-2">
              <span className=" text-md font-medium mr-3">
                0 <span className="underline">đ</span>
              </span>
              <div className="text-md font-medium w-[30px] h-[30px] relative border-2 border-white flex items-center justify-center cart-icon-header text-white">
                  0
              </div>
              <div className="group-hover:flex absolute bg-white top-full border p-3 hidden text-left border-gray-300 min-w-[260px] right-[-20px] h-[100px] z-10 items-center justify-center">
                <p className="text-[#777]">
                  Chưa có sản phẩm trong giỏ hàng
                </p>
              </div>
            </div>
          </ul>
        </Container>
      </div>
    </div>
  )
}
