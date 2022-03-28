import React from 'react'
import { Link } from 'react-router-dom';
import Card from './components/Card';
export default function Product() {
  return (
    <div className="max-w-screen-xl w-full mx-auto py-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xl">
          <Link to="/" className="opacity-50">TRANG CHỦ</Link>
          <span className="mx-3">/</span>
          <p className="text-black font-medium">CỬA HÀNG</p>
        </div>
        <div className="flex items-center">
          <p className="text-md mr-5">Hiển thị 1-9 trong 19 kết quả</p>

          <select className="px-3 py-2 border border-gray-300">
            <option>
              Thứ tự mặc định
            </option>
            <option>
              Thứ tự theo mức độ phổ biên
            </option>
            <option>
              Thứ tự theo điểm đánh giá
            </option>
            <option>
              Mới nhất
            </option>
            <option>
              Thứ tự theo giá: thấp đến cao
            </option>
            <option>
              Thứ tự theo giá: cao đến thấp
            </option>
          </select>
        </div>
      </div>

      <div className="flex mt-5">
        <div className="w-1/5 flex flex-col mr-5">
          <h1 className="text-xl uppercase text-black font-semibold mb-5 opacity-80">Danh Mục sản phẩm</h1>
          <div className="border border-gray-300 rounded p-2 mb-5">
            <div className="py-2 border-b border-dashed border-gray-300 opacity-80 hover:opacity-100 text-black">
              <Link to="/" className="w-full h-full">
                Bông tai
              </Link>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 opacity-80 hover:opacity-100 text-black">
              <Link to="/" className="w-full h-full">
                Dây chuyền
              </Link>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 opacity-80 hover:opacity-100 text-black">
              <Link to="/" className="w-full h-full">
                Lắc tay
              </Link>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 opacity-80 hover:opacity-100 text-black">
              <Link to="/" className="w-full h-full">
                Nhẫn bạc
              </Link>
            </div>
            <div className="py-2 border-b border-dashed border-gray-300 opacity-80 hover:opacity-100 text-black">
              <Link to="/" className="w-full h-full">
                Bông tai
              </Link>
            </div>
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
        <div className="w-4/5">
          <div className="w-1/3 px-2 float-left mb-4">
              <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
          <div className="w-1/3 px-2 float-left mb-4">
            <Card />
          </div>
        </div>
      </div>
    </div>
  )
}
