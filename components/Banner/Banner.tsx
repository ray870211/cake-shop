"use client"
/* eslint-disable jsx-a11y/anchor-is-valid */
// import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import style from "./banner.module.sass";
import Image from 'next/image'
import bannerPic from "../../assets/banner.jpg"
import prevButton from "./ui/1486348526-arrow-back-backwards-repeat-previous_80453.png"
import nextButton from "./ui/1486348525-music-forward-front-next-arrow_80457.png"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import 'swiper/swiper.min.css'
import "swiper/css/autoplay";
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {

    return (
        <div className={style.swiper_wrap}>
            <Swiper
                className={style.swiper}
                modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
                autoplay={{ delay: 3000 }}
                spaceBetween={10}
                slidesPerView={2}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}>
                <SwiperSlide>
                    <Image width={500}
                        height={500} src={bannerPic} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={500}
                        height={500} src={bannerPic} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={500}
                        height={500} src={bannerPic} alt='' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image width={500}
                        height={500} src={bannerPic} alt='' />
                </SwiperSlide>

            </Swiper>
            {/* <button className={style.swiper_button_prev + ' swiper-button-prev'}><Image alt="" src={prevButton}></Image></button>
            <button className={style.swiper_button_next + ' swiper-button-next'}><Image alt="" src={nextButton}></Image></button> */}
        </div>




    );
}
export default Banner;