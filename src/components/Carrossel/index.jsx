import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";
import { Navigation } from "swiper/modules";
import piano from "../../assets/piano.webp";
import guitarra from "../../assets/guitarra.jpg";

export default function Carrossel() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <img src={piano} alt="piano" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={guitarra} alt="piano" />
      </SwiperSlide>
    </Swiper>
  );
}
