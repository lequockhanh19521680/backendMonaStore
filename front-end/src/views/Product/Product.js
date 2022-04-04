import React from 'react'
import { Link } from 'react-router-dom';

import Pagination from '../../components/Pagination'
import ProductCard from '../../components/Card/ProductCard'

export default function Product() {

  const category = [
    {
      name: 'Bông tai',
      link: '/'
    },
    {
      name: 'Dây chuyền',
      link: '/'
    },
    {
      name: 'Lắc tay',
      link: '/'
    },
    {
      name: 'Nhẫn bạc',
      link: '/'
    },
    {
      name: 'Bông tai',
      link: '/'
    },

  ]
  
  return (
    <div className="max-w-screen-xl w-full mx-auto py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xl">
          <Link to="/" className="opacity-50 hover:opacity-100">TRANG CHỦ</Link>
          <span className="mx-3">/</span>
          <p className="text-black font-medium">CỬA HÀNG</p>
        </div>
        <div className="flex items-center">
          <p className="text-md mr-5">Hiển thị 1-9 trong 19 kết quả</p>

          <select className="px-3 py-2 border border-gray-300">
            <option>
              Mặc định
            </option>
            <option>
              Sản phẩm nổi bật
            </option>
            <option>
              Mới nhất
            </option>
            <option>
              Cũ nhất
            </option>
            <option>
              Giá: Tăng dần
            </option>
            <option>
              Giá: Giảm dần
            </option>
          </select>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="w-1/5 flex flex-col mr-5">
          <h1 className="text-xl uppercase text-black font-semibold mb-5 opacity-80">Danh Mục sản phẩm</h1>
          <div className="border border-gray-300 rounded p-2 mb-5">
            {
              category.map((item,index) => {
               return (
                 <div key={index} className="py-2 border-b border-dashed border-gray-300 opacity-80 hover:opacity-100 text-black">
                   <Link to={item.link} className="w-full h-full">
                     {item.name}
                   </Link>
                 </div>
               )
              })
            }
          </div>

          <h1 className="text-xl uppercase text-black font-semibold mb-5 opacity-80">Lọc theo giá</h1>
          <h1 className="text-xl uppercase text-black font-semibold mb-5 opacity-80">Quan tâm</h1>
          <div className="border border-gray-300 rounded p-2 mb-5">
            <div className="py-2 border-b border-dashed border-gray-300 flex">
              <img src="/images/home/product3.png" alt="product" className="w-16 h-16"/>
              <div className="flex flex-col justify-between">
                <Link to="/" className="opacity-80 hover:opacity-100 text-black">
                  Vòng cổ tím huyền bí
                </Link>
                <div>
                  <del className="opacity-50">5.000.000 đ</del>
                  <p className="text-black font-medium">3.250.000 đ</p>
                </div>
              </div>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 flex">
              <img src="/images/home/product3.png" alt="product" className="w-16 h-16"/>
              <div className="flex flex-col justify-between">
                <Link to="/" className="opacity-80 hover:opacity-100 text-black">
                  Vòng cổ tím huyền bí
                </Link>
                <div>
                  <del className="opacity-50">5.000.000 đ</del>
                  <p className="text-black font-medium">3.250.000 đ</p>
                </div>
              </div>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 flex">
              <img src="/images/home/product3.png" alt="product" className="w-16 h-16"/>
              <div className="flex flex-col justify-between">
                <Link to="/" className="opacity-80 hover:opacity-100 text-black">
                  Vòng cổ tím huyền bí
                </Link>
                <div>
                  <del className="opacity-50">5.000.000 đ</del>
                  <p className="text-black font-medium">3.250.000 đ</p>
                </div>
              </div>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 flex">
              <img src="/images/home/product3.png" alt="product" className="w-16 h-16"/>
              <div className="flex flex-col justify-between">
                <Link to="/" className="opacity-80 hover:opacity-100 text-black">
                  Vòng cổ tím huyền bí
                </Link>
                <div>
                  <del className="opacity-50">5.000.000 đ</del>
                  <p className="text-black font-medium">3.250.000 đ</p>
                </div>
              </div>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 flex">
              <img src="/images/home/product3.png" alt="product" className="w-16 h-16"/>
              <div className="flex flex-col justify-between">
                <Link to="/" className="opacity-80 hover:opacity-100 text-black">
                  Vòng cổ tím huyền bí
                </Link>
                <div>
                  <del className="opacity-50">5.000.000 đ</del>
                  <p className="text-black font-medium">3.250.000 đ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-4/5 -mx-2">
        
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
            <div className="w-1/3 px-2 float-left mb-4">
              <ProductCard />
            </div>
         
        </div>
      </div>

    </div>
  )
}
