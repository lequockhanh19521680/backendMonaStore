import React from 'react'
import Container from '../Container/Container';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiInstagram, FiFacebook, FiTwitter, FiTwitch, FiYoutube, FiSend } from "react-icons/fi";

export default function Footer() {
  
  return (
    <div className="text-white-1 flex flex-col">
      <div className="w-full bg-dark lg:h-[250px] h-[600px] md:h-[450px] bg-[url('/public/images/bgFooter.png')] bg-cover bg-center">
        <div className="bg-dark w-full h-full">
          <div className="h-full max-w-screen-xl mx-auto w-full lg:flex lg:pt-0 md:py-5 items-center">
            <div className="md:flex md:mb-20 lg:mb-0 lg:w-1/2">
              <Link to="/" className="float-left lg:w-72 md:w-1/2 w-full sm:mb-0 mb-5">
                <img src="/logo.png" alt="logo" className="" />
              </Link>
              <ul className="md:w-1/2 w-full md:px-0 px-3 float-left sm:mb-0 mb-5">
                <li className="flex items-center mb-1">
                  <FiMapPin className="text-md mr-3 text-white w-[20px] h-[15px]" />
                  <p className="opacity-50">
                    319 C16 Lý Thường Kiệt, Phường 15, Quận 11, Tp.HCM
                  </p>
                </li>
                <li className="flex items-center mb-1">
                  <FiPhone className="text-md mr-3 text-white w-[20px] h-[15px]" />
                  <p className="opacity-50">
                    076 922 0162
                  </p>
                </li>
                <li className="flex items-center mb-1">
                  <FiMail className="text-md mr-3 text-white w-[20px] h-[15px]" />
                  <div>
                    <p className="opacity-50">
                      demonhunterg@gmail.com
                    </p>
                  </div>
                </li>
                <li className="flex items-center mb-1">
                  <FiInstagram className="text-md mr-3 text-white w-[20px] h-[15px]" />
                  <p className="opacity-50">
                    JewelryStore
                  </p>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-3 float-left sm:mb-0 mb-5">
              <h1 className="text-white uppercase text-2xl font-medium mb-3">Follow us</h1>
              <p className="text-md">
                Follow để không bỏ lỡ bất kì ưu đãi nào từ chúng tôi
              </p>
              <div className="flex items-center mt-4">
                <Link to="/">
                  <FiFacebook className="mr-3 color-white w-[20px] h-[20px]" />
                </Link>
                <Link to="/">
                  <FiInstagram className="mr-3 color-white w-[20px] h-[20px]" />
                </Link>
                <Link to="/">
                  <FiTwitter className="mr-3 color-white w-[20px] h-[20px]" />
                </Link>
                <Link to="/">
                  <FiTwitch className="mr-3 color-white w-[20px] h-[20px]" />
                </Link>
                <Link to="/">
                  <FiYoutube className="mr-3 color-white w-[20px] h-[20px]" />
                </Link>
              </div>
            </div>

            <div className="lg:w-1/4 md:w-1/2 w-full px-3 float-left">
              <h1 className="text-white uppercase text-2xl font-medium mb-3">Đăng ký</h1>
              <p className="text-md">
                Đăng ký để nhận được được thông tin mới nhất từ chúng tôi.
              </p>
              <form className="relative w-full">
                <input className="mt-3 bg-white opacity-100 h-[40px] rounded px-3 w-full" placeholder="Email..." type="email" />
                <FiSend className="absolute text-xl top-6 fill-blue-500 right-3"/>
              </form>
            </div>
          </div>
        </div>
      
      </div>
      <div className="w-full bg-black-1 text-center py-4">
        <p className="text-white-1 text-md opacity-50">Bản quyền thuộc về MonaStore</p>
      </div>
    </div>
  )
}
