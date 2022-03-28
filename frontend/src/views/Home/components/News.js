import React from 'react'

import Container from '../../../components/Container/Container';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
export default function News() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 16,
    },
    tablet: {
      breakpoint: { max: 1024, min: 500 },
      items: 2,
      partialVisibilityGutter: 16,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      partialVisibilityGutter: 16,
    }
  };

  const newsList = [
    {
      image: '/images/home/news-card-1.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
    {
      image: '/images/home/news-card-2.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
    {
      image: '/images/home/news-card-3.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
    {
      image: '/images/home/news-card-4.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
    {
      image: '/images/home/news-card-5.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },
    {
      image: '/images/home/news-card-6.jpg',
      title: 'Aerolithe Performance Titanium Watch',
      time: '3 tháng Mười Hai, 2018',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut...'
    },

  ];
  return (
    <div className="w-full bg-black py-20">
      <div className="mb-10">
        <h1 className="uppercase text-4xl text-white text-center font-medium">Tin tức</h1>
      </div>
      <div className="max-w-screen-xl w-full mx-auto px-2">
        <div className="mr-[-8px] ml-[-8px]">
            <Carousel
              swipeable
              autoPlay
              autoPlaySpeed={3000}
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
            newsList.map((news, index) => {
              return (
                <div className="flex flex-col group" key={index}>
                    <Link to="/">
                    <img src={`${news.image}`} alt="images" className="w-full h-[250px] group-hover:scale-105 ease-in-out transition-transform duration-500" />
                    <h1 className="text-white-1 text-2xl font-medium">
                      {news.title}
                    </h1>
                    <p className="text-yellow-1 text-sm mb-5 font-medium opacity-80">{news.time}</p>
                    <p className="text-white h-[48px] text-justify text-ellipsis overflow-hidden text-sm-md mb-5">{news.content}</p>
                    </Link>
                    <Link to="/da" className="hover:bg-yellow-1 transition-all duration-200 ease-in-out cursor-pointer border-2 rounded-md border-dashed text-white-1 w-[150px] py-1 font-medium text-center text-xl uppercase">
                      Đọc thêm
                    </Link>               
                </div>
              )
            })
          }
          </Carousel>
    
        </div>
      </div>
    </div>
  )
}
