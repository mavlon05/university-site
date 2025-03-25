import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/Images/uicgroup2.jpg')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
        <h1 className="text-[24px] sm:text-[40px] md:text-[50px] font-bold">{t("hero.h1")}</h1>
        <p className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px]">{t("hero.p")}</p>
        <Link to={'/about'}>
          <button className="py-[10px] px-[24px] sm:py-[12px] sm:px-[32px] md:px-[40px] text-[14px] sm:text-[16px] md:text-[18px] mt-6 bg-blue-600 hover:bg-blue-800 transition-all duration-300 rounded-lg font-semibold shadow-md transform hover:scale-105">
            {t("hero.btn")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

