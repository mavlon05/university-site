import { FaTelegram, FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt, FaPhoneAlt, FaBuilding, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";


function Footer() {
    const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white mt-32 py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
        
        {/* Social Networks */}
        <div>
          <h2 className="text-2xl font-bold mb-3">{t("Footer.h1")}</h2>
          <ul className="space-y-4 pt-5">
            <Link to={'https://t.me/Sohibovich_m'}>
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaTelegram className="text-blue-500" />
              </span>
              <span className="text-lg">Telegram</span>
            </li>
            </Link>
            
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaFacebook className="text-blue-700" />
              </span>
              <span className="text-lg">Facebook</span>
            </li>
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaYoutube className="text-red-600" />
              </span>
              <span className="text-lg">Youtube</span>
            </li>
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaInstagram className="text-pink-500" />
              </span>
              <span className="text-lg">Instagram</span>
            </li>
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaTwitter className="text-sky-500" />
              </span>
              <span className="text-lg">Twitter</span>
            </li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">{t("Footer.h2")}</h2>
          <ul className="space-y-5 pt-5">
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaMapMarkerAlt className="text-red-500" />
              </span>
              <span className="text-lg">Qashqadaryo, Kitob, Iqtidor University</span>
            </li>
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaPhoneAlt className="text-green-500" />
              </span>
              <span className="text-lg">+998 (91) 452 22 74</span>
            </li>
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaBuilding className="text-blue-400" />
              </span>
              <span className="text-lg">+998 (66) 233 71 75</span>
            </li>
            <li className="flex items-center space-x-4 hover:translate-x-2 transition-all duration-300">
              <span className="w-10 h-10 flex items-center justify-center bg-white dark:bg-gray-700 rounded-full text-xl shadow-lg hover:shadow-xl transition-all">
                <FaEnvelope className="text-yellow-500" />
              </span>
              <span className="text-lg">iqtidor@university.uz</span>
            </li>
          </ul>
        </div>

        {/* Map Section */}
        <div className="w-full h-[250px] md:h-[300px] lg:h-[350px] rounded-lg shadow-lg overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://yandex.uz/map-widget/v1/?um=constructor%3A24c5eb5e257bdcdf3e4b75a29d5d00e2173d54a6c7bc2c27b321a165762c5a62&amp;source=constructor"
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
