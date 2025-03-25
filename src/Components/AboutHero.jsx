import { useTranslation } from "react-i18next";
import teamuic from "../../public/Images/Images2/Images3/team.uic.jpg";

function AboutHero() {
  const { t } = useTranslation();

  return (
    <div className="relative h-[800px] flex items-center justify-center text-white text-center px-6">
      {/* Background Image */}
      <div
        style={{ backgroundImage: `url(${teamuic})` }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-black/90"></div>
      </div>

      {/* Text Content */}
      <div className="relative max-w-4xl space-y-6 animate-fadeIn">
        <h1 className="text-[20px] sm:text-[40px] md:text-[70px] font-extrabold text-blue-white tracking-wide px-8 py-4 rounded-lg shadow-lg">
          {t("Abouthero.h1")}
        </h1>

        {/* Paragraphs */}
        <p className="text-lg sm:text-xl leading-relaxed sm:leading-loose max-w-3xl mx-auto text-blue-500">
          {t("Abouthero.p")}
        </p>
      </div>
    </div>
  );
}

export default AboutHero;
