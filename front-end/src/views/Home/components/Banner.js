import React from 'react'
import Container from '../../../components/Container/Container';
import { Link } from 'react-router-dom';
export default function Banner() {
    return (
        <div className="w-full sm:h-[500px] h-[300px] bg-[url('/public/images/home/model1.png')] bg-cover bg-center  overflow-hidden px-5">
            <Container className="h-full items-center">
                <div className="lg:w-1/2 md:w-2/3 w-4/5">
                    <div className="mb-8">
                        <h1 className="text-yellow-1 opacity-80 sm:text-lg text-lg font-medium">
                            MONA STORE
                        </h1>
                        <h2 className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl font-medium opacity-80 text-white uppercase">
                            Thiết kế từ tình yêu
                        </h2>
                        <div className="text-white text-md text-justify opacity-80 mt-3">
                            Trang sức cao cấp MONA tự hào thương hiệu Quốc gia Việt Nam. Với sự đa dạng về chủng loại, độc đáo về kiểu dáng, dẫn đầu về xu hướng đã đang và sẽ chiếm được sự tin tưởng và yêu mến của khách hàng
                        </div>
                    </div>

                    <Link to="/asd" className="hover:border-white hover:text-white hover:bg-yellow-1 transition-all duration-300 ease-in-out px-4 py-3 rounded opacity-80 font-medium uppercase text-yellow-1 border border-dashed border-yellow-1">
                        Mua ngay
                    </Link>
                </div>
            </Container>
        </div>
    )
}
