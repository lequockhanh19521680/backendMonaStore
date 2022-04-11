import React from 'react'
import { Link } from 'react-router-dom';
import Pagination from '../../components/Pagination'
import ProductCard from '../../components/Card/ProductCard'
import { useFetchProducts, useProducts, useFetchAllProductType, useAllProductType } from '../../store/product/hook'
import { ADD_ITEM_TO_JUST_VIEW } from '../../utils/storage'
import Price from '../../components/Price/Price'
import LoadingPage from './../../components/LoadingPage/Loading';
export default function Product() {
  useFetchProducts()
  useFetchAllProductType()
  const products = useProducts()
  const productTypes = useAllProductType()
  console.log(productTypes)
  let productStorage = ADD_ITEM_TO_JUST_VIEW.get()
  const category = [
    {
      name: 'Bông tai',
      link: '/danh-muc/'
    },
    {
      name: 'Dây chuyền',
      link: '/danh-muc/'
    },
    {
      name: 'Lắc tay',
      link: '/danh-muc/'
    },
    {
      name: 'Nhẫn bạc',
      link: '/danh-muc/'
    },
    {
      name: 'Đồng hồ',
      link: '/danh-muc/'
    },

  ]

  if (!productTypes || !products) {
    return <LoadingPage />
  }
  
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
              productTypes?.data?.map((item,index) => {
               return (
                 <div key={index} className="py-2 border-b border-dashed border-gray-300 opacity-80 hover:opacity-100 text-black">
                   <Link to={`/danh-muc?typeProductId=${item?.typeId}`} className="w-full h-full" >
                     {item?.nameType}
                   </Link>
                 </div>
               )
              })
            }
          </div>

          {productStorage && (
            <>
              <h1 className="text-xl uppercase text-black font-semibold mb-5 opacity-80">Quan tâm</h1>
              <div className="border border-gray-300 rounded p-2 mb-5">
                {
                  productStorage?.map((product, index) => {
                    return (
                      <div className="py-2 border-b border-dashed border-gray-300 flex">
                        <img src={product?.image?.[0]} alt="product" className="w-16 h-16" />
                        <div className="flex flex-col justify-between">
                          <Link to="/" className="opacity-80 hover:opacity-100 text-black">
                            {product?.name}
                          </Link>
                          <Price
                            className="mb-3"
                            price={product?.priceSale}
                            priceDel={product?.price}
                            color="black"
                          />
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </>
          )}
        </div>
        <div className="w-4/5 -mx-2">
            {
            products?.data?.map((product,index) => {
              return (
                <div className="w-1/3 px-2 float-left mb-4" key={index}>
                  <ProductCard product={product} />
                </div>
              )
            })
            }

         
        </div>
      </div>

    </div>
  )
}
