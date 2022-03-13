import React from 'react'
import { Link } from 'react-router-dom';
import '../../../styles/cardProduct.scss'
export default function Card() {
  return (
      <div className="w-full h-[350px] flex flex-col text-center bg-white cardContainer">
            <Link to="" className="w-[270px] h-[270px] relative group">
              <img src="/images/home/product17.jpg" alt="product" className="w-full h-full absolute top-0 group-hover:opacity-0 opacity-100 transition-opacity duration-1000 ease-linear" />
              <img src="/images/home/product16.jpg" alt="product" className="w-full h-full absolute top-0 opacity-0 transition-opacity duration-1000 ease-linear group-hover:opacity-100" />
            </Link>
          <Link to="/" className="text-[#334862] hover:text-black text-sm-md font-medium mt-2">BIG BANG MXM18 SANG BLEU 39</Link>
            <div className="flex items-center justify-center mt-3">
                <del className="opacity-50">5,000,000 đ</del>
                <p className="text-black font-medium ml-2">3,500,000 đ</p>
            </div>
     </div>

  )
}
