import { FaChalkboardTeacher, FaUniversity, FaGlobe } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const iconMap = {
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaUniversity: FaUniversity,
  FaGlobe: FaGlobe,
};

function WhyChooseUs() {
  const { t, i18n } = useTranslation(); 

  const [whyChoose, setWhyChoose] = useState([]);

  useEffect(() => {
    fetch("https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/univer/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1bml2ZXIvZGIuanNvbiIsImlhdCI6MTc0NDE3OTI0MSwiZXhwIjoxNzc1NzE1MjQxfQ.r76rnG4fKTMFsVJS-wBYIP2gTNS5XJ2Flqa9Hj250zI")
      .then((res) => res.json())
      .then((data) => setWhyChoose(data.whychooseUs))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  return (
    <div className="py-16 text-black dark:text-white text-center px-6">
      <h2 className="text-5xl font-bold mb-8">
        <span className="text-sky-400">{t("Abouthero.h1")}</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {whyChoose.map((item, index) => {
          const IconComponent = iconMap[item.icon] || FaChalkboardTeacher; // Default icon
          return (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg w-80 flex flex-col items-center group transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-700 group-hover:bg-blue-600 transition-all duration-300">
                <IconComponent className="text-white text-3xl group-hover:scale-110 transition-all duration-300" />
              </div>
              <h3 className="text-2xl font-semibold text-sky-300 mt-4">
                {item.title[i18n.language]} 
              </h3>
              <p className="mt-3 text-gray-300 text-center">
                {item.description[i18n.language]} 
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default WhyChooseUs;
