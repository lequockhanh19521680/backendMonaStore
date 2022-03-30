import React from 'react'
import { Link } from 'react-router-dom';
import '../../styles/cardProduct.scss'
import { ADD_ITEM_TO_JUST_VIEW } from '../../utils/storage'
export default function ProductCard({ product }) {
    return (
        <div
         className="w-full h-[350px] flex flex-col text-center bg-white product-card-container"
         onClick={() => {
             ADD_ITEM_TO_JUST_VIEW.set("abc")
         }}
         >
            <Link to="/" className="h-[270px] relative group">
                <img src="/images/home/product10.jpg" alt="product" className="w-full h-full absolute top-0 group-hover:opacity-0 opacity-100 transition-opacity duration-1000 ease-linear" />
                <img src="/images/home/product11.jpg" alt="product" className="w-full h-full absolute top-0 opacity-0 transition-opacity duration-1000 ease-linear group-hover:opacity-100" />
            </Link>
            <Link to="/" className="text-[#334862] hover:text-black text-sm-md font-medium mt-2">BIG BANG MXM18 SANG BLEU 39</Link>
            <div className="flex items-center justify-center mt-3">
                <del className="opacity-50">5,000,000 đ</del>
                <p className="text-black font-medium ml-2">3,500,000 đ</p>
            </div>
        </div>

    )
}