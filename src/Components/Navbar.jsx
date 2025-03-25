import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronUp } from "lucide-react";
import logo1 from "../../public/oqLogo.png";
import { useTranslation } from "react-i18next";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const changeLanguage = (e, lang) => {
    e.preventDefault();
    i18n.changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full h-[100px] px-6 sm:px-10 flex justify-between items-center z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-800 shadow-lg" : "bg-gray-900"
      }`}
    >
      <div className="flex items-center">
        <Link to="/">
          <img
            className="w-[120px] sm:w-[150px] md:w-[180px] h-auto"
            src={logo1}
            alt="logo1"
          />
        </Link>
      </div>

      <ul className="hidden md:flex gap-6 text-[17px] font-semibold  lg:gap-9">
        <li>
          <Link to="/" className="text-white hover:text-blue-400 transition">
            {t("navbar.h1")}
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-blue-400 transition">
            {t("navbar.h2")}
          </Link>
        </li>
        <li>
          <Link to="/services" className="text-white hover:text-blue-400 transition">
            {t("navbar.h3")}
          </Link>
        </li>
        <li>
          <Link to="/NewsPage" className="text-white hover:text-blue-400 transition">
            {t("navbar.h4")}
          </Link>
        </li>
      </ul>

      {/* Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Modal Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex bottom-[900px]  justify-center items-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg w-80">
            <button className="text-white absolute top-4 right-4" onClick={() => setMenuOpen(false)}>
              <X size={28} />
            </button>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-white block" onClick={() => setMenuOpen(false)}>
                  {t("navbar.h1")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white block" onClick={() => setMenuOpen(false)}>
                  {t("navbar.h2")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white block" onClick={() => setMenuOpen(false)}>
                  {t("navbar.h3")}
                </Link>
              </li>
              <li>
                <Link to="/NewsPage" className="text-white block" onClick={() => setMenuOpen(false)}>
                  {t("navbar.h4")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-4">
        <SignedOut>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition">
            <SignInButton mode="modal"/>
          </button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        {/* Language Switcher */}
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white px-3 py-2 rounded-lg shadow-md hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          >
            {i18n.language === "uz" ? "O‘zbek" : "English"}
            <ChevronUp className={`ml-2 transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>
          {isOpen && (
            <div className="absolute top-full left-0 mt-2 w-[110px] bg-white dark:bg-gray-800 rounded-lg border border-gray-300 shadow-lg">
              <button
                onClick={(e) => changeLanguage(e, "uz")}
                className="w-full py-2 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                O‘zbek
              </button>
              <button
                onClick={(e) => changeLanguage(e, "en")}
                className="w-full py-2 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 transition"
              >
                English
              </button>
            </div>
          )}
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 rounded-lg shadow-md transition-all duration-300 
            bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {darkMode ? "🌙 Dark Mode" : "🌞 light Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
