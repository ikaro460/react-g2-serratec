import "./style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";

import { register } from "swiper/element/bundle";

register();
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Carrossel() {
  const [slidePerView, setSlidePerview] = useState(2);
  const data = [
    {
      id: "1",
      image:
        "https://images.pexels.com/photos/6647419/pexels-photo-6647419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: "2",
      image:
        "https://img.wallpapic.com/i2652-221-145/thumb/music-art-guitar-string-instrument-musical-wallpaper.jpg",
    },
    {
      id: "3",
      image:
        "https://cangurunews.com.br/wp-content/uploads/2021/02/instrumentos-musicais-696x459.jpg",
    },
    {
      id: "4",
      image:
        "https://uploads.metropoles.com/wp-content/uploads/2022/10/04134556/bateria-instrumento.jpg",
    },
  ];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePerview(1);
      } else {
        setSlidePerview(2);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper slidePerView={1} pagination={{ clickable: true }} navigation>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slider" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;
