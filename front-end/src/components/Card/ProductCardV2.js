import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../../components/CartIcon/CartIcon'
import Price from '../../components/Price/Price'
export default function ProductCardV2({ product }) {
  return (
      <div className="flex flex-col bg-white relative group">
          <Link to={`/san-pham/${product?._id}`}>
              <div className="relative w-[281px] h-[281px]">
                  {product?.image?.[0] && <img src={product?.image?.[0]} alt="product" className="w-full h-full absolute top-0 group-hover:opacity-0 opacity-100 transition-opacity duration-1000 ease-linear" />}
                  {product?.image?.[1] && <img src={product?.image?.[1]} alt="product" className="w-full h-full absolute top-0 opacity-0 transition-opacity duration-1000 ease-linear group-hover:opacity-100" />}
              </div>
              <div className="px-3 text-center">
                  <p className="text-[#334862] text-md overflow-hidden font-medium mb-3 whitespace-nowrap">
                      {product?.nameProduct}
                  </p>
                  <Price
                     className="mb-3"
                      price={product?.priceSale}
                      priceDel={product?.price}
                      color="black"
                  />
              </div>
          </Link>

          <CartIcon className="bottom-20 left-4 cursor-pointer group-hover:opacity-100" />
      </div>
  )
}
