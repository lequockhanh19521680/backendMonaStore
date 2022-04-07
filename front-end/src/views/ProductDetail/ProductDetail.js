import React, { useState } from 'react'
import Price from '../../components/Price/Price'
import classnames from 'classnames'
import Star from '../../components/Star/Star'
import Comment from '../../components/Comment'
import ProductCardV2 from '../../components/Card/ProductCardV2';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import productApi from './../../api/productApi';
import { useFetchProduct, useProduct } from '../../store/product/hook'

export default function ProductDetail() {
  useFetchProduct()
  const product = useProduct()
  console.log(product)
  const [tab, setTab] = useState(1)
  const handleChangeTab = (tab) => {
    setTab(tab)
  }
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
  const dataPost = {
    id: '1',
    name: 'bao',
    age: '19'
  }


  const handlePost = (dataPost) => async () => {
    try {
      await productApi.postProduct(dataPost)
    } catch (error) { console.log(error) }
  }

  return (

    <div className="max-w-screen-xl w-full mx-auto py-5">
      <div className="flex">
        <div className="w-3/5 grid grid-cols-2">
          <img className="max-w-full" src="https://res.cloudinary.com/kendra-scott/image/upload/q_auto,f_auto,dpr_auto/w_800,c_fit/Catalogs/kendrascott/March-Chain-Chase-New/kendra-scott-kassie-set-of-3-chain-bracelet-gold-00.jpeg" alt="product-detail" />
          <img className="max-w-full" src="https://res.cloudinary.com/kendra-scott/image/upload/q_auto,f_auto,dpr_auto/w_800,c_fit/Catalogs/kendrascott/3-2-Launches/Model-Images/kendra-scott-kassie-bracelet-set-gold-00.jpg" alt="product-detail" />
          <img className="max-w-full" src="https://res.cloudinary.com/kendra-scott/image/upload/q_auto,f_auto,dpr_auto/w_800,c_fit/Catalogs/kendrascott/Spring-3/Model-Images/Kendra-Scott-Kassie-Bracelet-Set-Gold-06.jpg" alt="product-detail" />


          {
            product?.image?.map((image, index) => {
              return (
                <img key={index} className="max-w-full" src={image} alt="product-detail" />
              )
            })
          }
        </div>

        <div className="w-2/5 pl-5">
          <p className="text-black font-medium text-2xl opacity-80 mb-3">
            {product?.nameProduct}
          </p>
          <div className="mb-5">
            <Star
              numberStar={product?.star}
              size="2xl"
            />
          </div>
          <Price
            price={product?.priceSale}
            priceDel={product?.price}
            color="black"
            className="text-lg mb-5"
          />

          <a href="#des-detail" className="text-primary underline">
            Description & Details
          </a>

          <div className="flex items-center">
            <button className="bg-primary text-white font-medium text-lg py-2 px-5 opacity-80 hover:opacity-100">
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-2 p-10 mt-20" id="des-detail" >
        <div className="flex items-center mb-4">
          <div
            className={classnames("uppercase text-black mr-4 px-2 pb-1 cursor-pointer", { "border-b-4 border-primary": tab === 1 })}
            onClick={() => handleChangeTab(1)}
          >
            Description
          </div>
          <div
            className={classnames("uppercase text-black px-2 pb-1 cursor-pointer", { "border-b-4 border-primary": tab === 2 })}
            onClick={() => handleChangeTab(2)}
          >
            Details
          </div>

        </div>

        {
          tab === 1 && (
            <div>
              <p className="opacity-70">
                {
                  product?.description
                }
              </p>
            </div>
          )
        }
        {
          tab === 2 && (
            <div className="px-2 opacity-80">
              {
                product?.metal && (
                  <>
                    <div className="flex items-center mb-3">
                      <p className="text-black font-medium">
                        METAL
                      </p>
                      <p className="ml-2">
                        {product?.metal}
                      </p>
                    </div>
                  </>
                )
              }

              {
                product?.size && (
                  <>
                    <div>
                      <p className="text-black font-medium mb-1">
                        Size
                      </p>
                      <p>
                        {product?.size}
                      </p>
                    </div>
                  </>
                )
              }
            </div>
          )
        }
      </div>

      <p className="text-black font-medium text-2xl py-5 my-10 border-b border-gray-300">Recommend for you</p>
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

      <p className="text-black font-medium text-2xl py-5 my-10 border-b border-gray-300">Recently Viewed</p>
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


      <button onClick={() => handlePost(dataPost)}>
        ajdasdd
      </button>

      <Comment />
    </div>

  )
}
