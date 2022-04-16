import React, { useState } from 'react'
import Container from '../../components/Container/Container'
import { X, Tag, ArrowLeft } from 'react-feather'
import Price from '../../components/Price/Price'
import { Link } from 'react-router-dom'
export default function Cart() {

    const [inputValue, setInputValue] = useState(1)

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        console.log(inputValue)
    }

    const handleIncrease = (e) => {
        e.preventDefault()
        setInputValue(inputValue + 1)
    }
    const handleDecrease = (e) => {
        e.preventDefault()
        setInputValue(inputValue - 1)
    }
    return (
       <div className="w-full bg-white">
            <Container className="items-start">
                <div className="my-5 w-3/5 px-5">
                    <table className="w-full">
                        <thead className="border-b-2 border-gray-300">
                            <tr className="mb-3">
                                <th className="text-left pb-3">
                                    Sản phẩm
                                </th>
                                <th className="text-center">
                                    Giá
                                </th>
                                <th className="text-center">
                                    Số lượng
                                </th>
                                <th className="text-right">
                                    Tổng
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="flex items-center py-5">
                                    <button className="opacity-50 w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center mr-2">
                                        <X width={15} />
                                    </button>
                                    <img src="/images/home/product9.jpg" alt="product" width={100} height={100} />
                                    <p className="opacity-80 ml-3">Vòng cổ tím huyền bí</p>
                                </td>
                                <td>
                                    <Price
                                        price="3,250,000"
                                        color="black"

                                    />
                                </td>

                                <td>

                                    <form className="flex items-center">
                                        <button className="bg-[#f9f9f9] px-2 py-2 border border-gray-300"
                                            onClick={handleDecrease}
                                        >
                                            -
                                        </button>
                                        <input value={inputValue} className="w-8 py-2 text-center border border-gray-300" onChange={handleInputChange} />
                                        <button
                                            className="bg-[#f9f9f9] px-2 py-2 border border-gray-300"
                                            onClick={handleIncrease}
                                        >
                                            +
                                        </button>
                                    </form>

                                </td>
                                <td className="text-right">
                                    <Price
                                        price="3,250,000"
                                        color="black"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="">
                        <Link to="/danh-muc" className="flex py-1 items-center border-2 border-yellow-1 text-yellow-1 uppercase font-medium w-64 justify-center">
                            <ArrowLeft width={20} className="mr-1" />
                            Tiếp tục xem sản phẩm
                        </Link>
                    </div>
                </div>

                <div className="w-2/5 px-5 mt-7 mb-5 border-l border-gray-300">
                    <div className="border-b-2 border-gray-300 pb-1">
                        <p className="uppercase font-medium text-black">Tổng số lượng</p>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                        <p>Tổng phụ</p>
                        <Price
                            price="6,750,000"
                            color="black"
                        />
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-gray-300">
                        <p>Giao hàng</p>
                        <div className="flex items-end flex-col">
                            <p className="text-sm-md opacity-80 mb-2">
                                Giao hàng miễn phí
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center justify-between py-2 border-b-2 border-gray-300">
                        <p>Tổng</p>
                        <Price
                            price="6,750,000"
                            color="black"
                        />
                    </div>

                    <div className="text-black font-medium flex items-center py-3 border-b-2 border-gray-300">
                        <Tag width={20} className="mr-2" />
                        Phiếu ưu đãi
                    </div>

                    <input placeholder="Mã ưu đãi" className="p-2 my-3 border border-gray-300 w-full" />

                    <button className="bg-[#f9f9f9] w-full py-2 border border-gray-300 hover:bg-[#c7c7c7]">
                        Áp dụng
                    </button>
                    <Link to="/thanh-toan">
                        <div className="text-center w-full py-2 text-white font-medium uppercase bg-[#d26e4b] hover:bg-[#a8583c] my-3">
                            Tiến hành thanh toán
                        </div>
                    </Link>
                </div>
            </Container>
       </div>
    )
}