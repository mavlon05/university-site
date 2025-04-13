import { Link } from "react-router-dom"; // To‘g‘ri import
import { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaUserCheck, FaBuilding } from "react-icons/fa";
import { useTranslation } from "react-i18next";


const iconMap = {
  FaChalkboardTeacher: FaChalkboardTeacher,
  FaUserGraduate: FaUserGraduate,
  FaUserCheck: FaUserCheck,
  FaBuilding: FaBuilding
};

function Statistics() {
  const { t,i18n } = useTranslation();

  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetch("https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/univer/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1bml2ZXIvZGIuanNvbiIsImlhdCI6MTc0NDE3OTI0MSwiZXhwIjoxNzc1NzE1MjQxfQ.r76rnG4fKTMFsVJS-wBYIP2gTNS5XJ2Flqa9Hj250zI")
      .then((res) => res.json())
      .then((data) => setStats(data.statistics))
      .catch((error) => console.error("Error loading statistics:", error));
  }, []);

  return (
    <div>
      <h1 className="text-4xl font-bold text-center pt-10">{t('statistic.h1')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-20 text-center p-6 rounded-lg gap-6">
        {stats.map((item) => {
          const IconComponent = iconMap[item.icon] || FaUserGraduate; // Default icon
          return (
            <Link to={`/statistics/${item.id}`} key={item.id}> {/* To‘g‘ri link */}
              <div className="bg-white p-6 group transition duration-300 hover:scale-105 rounded-lg shadow-md flex flex-col items-center">
                <div className="border-2 w-20 h-20 border-gray-300 group-hover:border-blue-500 p-2 flex items-center justify-center rounded-full">
                  <IconComponent className="w-11 h-11 text-gray-700 transition-all duration-500 group-hover:text-blue-500" />
                </div>
                <h1 className="text-4xl font-bold text-gray-800 mt-2">{item.totalNumber}</h1>
                <p className="text-gray-700">{item.statisticdesc[i18n.language]}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Statistics;
