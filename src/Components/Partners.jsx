import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";


import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination } from "swiper/modules";

export default function App() {
    const { t } = useTranslation();
  
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetch("https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODk0NDMzLCJleHAiOjE3NzQ0MzA0MzN9.fNhUFouExxZBgJJMpQFqchlkbMvRZ90RlIl4MTxBBRk")
      .then((res) => res.json())
      .then((data) => setPartners(data.partners))
      .catch((error) => console.error("Error loading partners:", error));
  }, []);

  return (
    <div className="p-4 mt-32 mr-2">
      <h1 className="text-6xl text-black dark:text-white text-center font-bold mb-2">{t("Partners.h1")}</h1>
      <p className="text-lg text-center text-gray-600 mb-6">{t("Partners.p")}</p>
      
      <Swiper
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}                                  
        className="mySwiper"
      >
        {partners.map((partner) => (
          <SwiperSlide key={partner.id}>
            <a href={partner.href} target="_blank" rel="noopener noreferrer">
              <div className="bg-black group w-45 h-32 flex items-center justify-center rounded-md">
                <img className="w-30 opacity-30 group-hover:opacity-100 group-hover:grayscale" src={partner.imgSrc} alt={partner.alt} />
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
