// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import fetch from '../api/fetch';
import React, { useEffect, useState } from 'react'
import urlBase from "../base/urlBase";
import { useNavigate } from "react-router-dom";

const Hero = () => {

    const [trendingMovies, setTrendingMovies] = useState()
    let image_url = urlBase.image_url

    useEffect(() => {
        fetch.getNowPlaying((data)=> {
            setTrendingMovies(data.results);
        })
    }, [])

    let navigate = useNavigate()

 


  return (
    <div>
        <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >

        {
         trendingMovies && trendingMovies.map((data)=> {
                return(
                    <SwiperSlide>
          <img
            src={image_url + data.backdrop_path}
            alt=""
            className="slide-banner-image w-full"
          />

          <div className="feather-dark-overlay z-20"></div>
          <div className="banner-overlay pt-20 z-30 flex">
            <div className=" w-2/4 h-full pl-16 pr-6 ml-20">
              <h1 className="text-white text-6xl banner-text leading-snug mr-36 mt-0">
                {data.original_title}
              </h1>
              <p className="font-peakgo-book text-white mt-6 banner-description">
                {data.overview}
              </p>
              <a
                class="banner-button-1 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg mt-8 px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                href={'/moreinfo/' + data.id}
              >
                Watch now
              </a>
              <button
                type="button"
                class="banner-button-2 py-2.5 px-5 mr-2 mb-2 text-lg mt-8 font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                onClick={()=> navigate('/moreinfo/' + data.id)}
              >
              
                More information
              </button>
            </div>
            <img
              src= {image_url + data.poster_path}
              className="hero-poster-image z-30 ml-16"
            />
            <div className="w-full h-24 absolute -bottom-20 bg-black blur-xl"></div>
          </div>
        </SwiperSlide>
                )
            })
        }

        
      </Swiper>
    </div>
  )
}

export default Hero