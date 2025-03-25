import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import { useTranslation } from "react-i18next";


const Services = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
    const { t ,i18n} = useTranslation();
  

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => setServices(data.services))
      .catch((error) => console.error("Error loading services:", error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="text-center py-20 bg-gradient-to-r from-purple-600 to-indigo-700 text-white shadow-lg">
        <h1 className="text-5xl font-extrabold">{t("ServiceHero.h1")}</h1>
        <p className="text-xl mt-4 max-w-2xl mx-auto">
         {t("ServiceHero.p")}
        </p>
      </div>

      <div className="container mx-auto py-16 px-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="p-8 rounded-3xl shadow-xl text-center transform hover:scale-105 transition duration-300 bg-white dark:bg-gray-800"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-[185px] object-cover rounded-lg"
            />
            <h2 className="text-3xl font-bold mt-5">{service.title}</h2>
            <p className="mt-3 text-lg">{service.description}</p>
            <button
              onClick={() => navigate(`/services/${service.id}`)}
              className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition"
            >
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* Get in Touch Section */}
      <div className="text-center py-20 bg-gray-100 dark:bg-gray-800">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
          {t("serviceGet.h1")}
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 mt-4">
        {t("serviceGet.p")}
        </p>
        <Link to={"https://t.me/Sohibovich_m"} target="_blank">
          <button className="mt-6 px-8 py-3 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition">
          {t("serviceGet.btn")}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
