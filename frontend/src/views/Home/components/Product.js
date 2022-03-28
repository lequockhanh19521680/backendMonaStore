import React from 'react'
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';
import CartIcon from '../../../components/CartIcon/CartIcon';

export default function Product() {
    return (
        <div className="w-full bg-black py-20">
            <div className="mb-10">
                <h1 className="uppercase text-4xl text-white text-center font-medium">Bộ sưu tập mới</h1>
            </div>
            <Container className="flex-col">
                <div className="flex sm:flex-row flex-col items-center w-full mb-10">
                    <div className="sm:w-1/4 w-full h-full text-center sm:mr-5 relative product-container group">
                        <Link to="/">   
                            <img src="/images/home/product2.png" alt="product" className="w-full" />
                            <p className="text-white-1 text-md font-medium mb-3">Vòng cổ tím huyền bí</p>
                            <p className="text-white-1 text-md font-medium mb-3">
                                <del className="opacity-50">
                                   5,000,000   <span className="underline">đ</span>
                                </del>
                                <span className="text-white-1 ml-2">
                                    3,250,000 <span className="underline">đ</span>
                                </span> 
                            </p>
                        </Link>
                        <CartIcon className="bottom-20 left-2 cursor-pointer group-hover:opacity-100"/>
                    </div>
                    <div className="sm:w-1/4 w-full h-full text-center sm:mr-5 relative group">
                        <Link to="/">
                            <img src="/images/home/product3.png" alt="product" className="w-full"  />
                            <p className="text-white-1 text-md font-medium mb-3">Dây chuyền trái tim đại dương</p>
                            <p className="text-white-1 text-md font-medium mb-3">
                                <del className="opacity-50">
                                    5,000,000   <span className="underline">đ</span>
                                </del>
                                <span className="text-white-1 ml-2">
                                    3,500,000 <span className="underline">đ</span>
                                </span>
                            </p>
                        </Link>
                        <CartIcon className="bottom-20 left-2 cursor-pointer group-hover:opacity-100" />
                    </div>
                    <div className="sm:w-1/2 w-full">
                        <img src="/images/home/product1.jpg" alt="model" className="w-full"  />
                    </div>
                </div>
                <div className="flex sm:flex-row flex-col items-center w-full">
                    <div className="sm:w-1/2 w-full sm:mr-5">
                        <img src="/images/home/product4.jpg" alt="model" className="w-full h-[350px] object-cover" />
                    </div>
                    <div className="sm:w-1/4 w-full h-full text-center sm:mr-5 relative group">
                        <Link to="/">
                            <img src="/images/home/product3.png" alt="product" className="w-full"  />
                            <p className="text-white-1 text-md font-medium mb-3">Dây chuyền trái tim đại dương</p>
                            <p className="text-white-1 text-md font-medium mb-3">
                                <del className="opacity-50">
                                    5,000,000   <span className="underline">đ</span>
                                </del>
                                <span className="text-white-1 ml-2">
                                    3,500,000 <span className="underline">đ</span>
                                </span>
                            </p>
                        </Link>
                        <CartIcon className="bottom-20 left-2 cursor-pointer group-hover:opacity-100" />
                    </div>
                    <div className="sm:w-1/4 w-full h-full text-center sm:mr-5 relative group">
                        <Link to="/">
                            <img src="/images/home/product2.png" alt="product" className="w-full" />
                            <p className="text-white-1 text-md font-medium mb-3">Vòng cổ tím huyền bí</p>
                            <p className="text-white-1 text-md font-medium mb-3">
                                <del className="opacity-50">
                                    5,000,000   <span className="underline">đ</span>
                                </del>
                                <span className="text-white-1 ml-2">
                                    3,250,000 <span className="underline">đ</span>
                                </span>
                            </p>
                        </Link>
                        <CartIcon className="bottom-20 left-2 cursor-pointer group-hover:opacity-100" />
                    </div>
                    
                </div>
            </Container>
        </div>
    )
}
