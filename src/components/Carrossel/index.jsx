import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import baterista from "../../assets/batera.jpg";
import guitarra from "../../assets/guitarra.jpg";
import violao from "../../assets/violao.jpg";

export default function Carrossel() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={baterista} alt="piano" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={guitarra} alt="piano" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={violao} alt="violao" />
      </SwiperSlide>
    </Swiper>
  );
}