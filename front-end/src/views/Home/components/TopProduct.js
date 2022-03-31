import React from 'react'
import { Link } from 'react-router-dom';
import CartIcon from '../../../components/CartIcon/CartIcon';
import ProductCardV2 from '../../../components/Card/ProductCardV2';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function TopProduct() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            partialVisibilityGutter: 16,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 16,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 16,
        }
    };

    const products = [
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product5.jpg',
            image2: '/images/home/product6.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product7.jpg',
            image2: '/images/home/product8.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product9.jpg',
            image2: '/images/home/product10.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },
        {
            name: 'MICHAEL KORS WATCH',
            image1: '/images/home/product11.jpg',
            image2: '/images/home/product12.jpg',
            id: '',
            price: '5,000,000 ',
            priceSale: '3,250,000',
        },

    ]
    return (
        <div className="w-full bg-black-2 py-20">
            <div className="mb-10">
                <h1 className="uppercase text-4xl text-white text-center font-medium">Sản phẩm mua nhiều</h1>
            </div>
   
            <div className="max-w-screen-xl w-full mx-auto">
                <div className="mr-[-8px] ml-[-8px]">
                    <Carousel
                        swipeable
                        autoPlay
                        autoPlaySpeed={2000}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true} // means to render carousel on server-side.
                        infinite={true}
                        keyBoardControl={true}
                        // removeArrowOnDeviceType={["tablet", "mobile"]}
                        minimumTouchDrag={80}
                        slidesToSlide={1}
                        itemClass="top-product-carousel-items"
                        containerClass="top-product-carousel-container"
                        partialVisible
                    >

                        {
                            products.map((product, index) => {
                                return (
                                    <ProductCardV2 product={product} />
                                )
                            })
                        }

                    </Carousel>
                </div>        
           </div>
          
        </div>
    )
}
