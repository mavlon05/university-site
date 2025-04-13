import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";



function News() {
  const [news, setNews] = useState([]);
  const { t,i18n } = useTranslation();

  useEffect(() => {
    fetch("https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/univer/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1bml2ZXIvZGIuanNvbiIsImlhdCI6MTc0NDE3OTI0MSwiZXhwIjoxNzc1NzE1MjQxfQ.r76rnG4fKTMFsVJS-wBYIP2gTNS5XJ2Flqa9Hj250zI")
      .then((res) => res.json())
      .then((data) => setNews(data.news)) 
      .catch((error) => console.error("Error loading news:", error));
  }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="flex flex-col items-center mt-20 gap-10 p-6">
      <h1 className="text-black dark:text-white text-3xl md:text-5xl font-semibold text-center">
        {t("News.h1")}
      </h1>

      <div className="w-full max-w-4xl">
        <Slider {...settings}>
          {news.map((New) => (
            <div key={New.id} className="p-4 md:p-6">
              <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg text-center">
                <img
                  className=" w-[400px] h-[350px] sm:w-[500px] sm:h-[400px] md:w-[700px] md:h-[500px] mx-auto rounded-xl object-cover"
                  src={New.img}
                  alt={New.title}
                />
                <h3 className="text-black font-bold mt-3 text-lg md:text-2xl">
                  {New.title[i18n.language]}
                </h3>
                <p className="text-gray-700 text-sm md:text-base pt-2 leading-relaxed">
                  {New.disc[i18n.language]}
                </p>
                <p className="text-gray-500 text-xs md:text-sm font-medium mt-2">
                  {New.date}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* "All view" tugmasi */}
      <div className="flex justify-center">

        <Link to={'/NewsPage'}>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 md:px-6 md:py-2 rounded-lg">
        {t("News.btn")}
        </button>
        </Link>
       
      </div>
    </div>
  );
}

export default News;
