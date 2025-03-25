import  { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [updates, setUpdates] = useState([]);
  const [popular, setPopular] = useState([]); // Popular News
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  window.scrollTo(0, 0);

  useEffect(() => {
    
    fetch("https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODk0NDMzLCJleHAiOjE3NzQ0MzA0MzN9.fNhUFouExxZBgJJMpQFqchlkbMvRZ90RlIl4MTxBBRk")
      .then((response) => response.json())
      .then((data) => {
        setUpdates(data.updates);
        setPopular(data.popular); // Popular yangiliklarni yuklash
      })
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  // 🔎 Filter: Search va Category bo‘yicha
  const filteredUpdates = updates.filter((update) => {
    const updateCategory = typeof update.category === "object" ? update.category[i18n.language] : update.category;
    const updateTitle = typeof update.title === "object" ? update.title[i18n.language] : update.title;

    return (
      (category === "All" || updateCategory === category) &&
      updateTitle.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4">
      <div className="max-w-6xl mx-auto">
        {/* Search va Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <input
            type="text"
            placeholder={t("Search news")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="p-2 border rounded w-full md:w-1/2 dark:bg-gray-800 dark:border-gray-600"
          />
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
          >
            <option value="All">{t("All")}</option>
            <option value="University">{t("University")}</option>
            <option value="Events">{t("Events")}</option>
            <option value="Announcements">{t("Announcements")}</option>
          </select>
        </div>

        {/* Yangiliklar Ro‘yxati */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredUpdates.map((update) => {
            const updateCategory = typeof update.category === "object" ? update.category[i18n.language] : update.category;
            const updateTitle = typeof update.title === "object" ? update.title[i18n.language] : update.title;

            return (
              <div
                key={update.id}
                className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow cursor-pointer"
                onClick={() => navigate(update.link)}
              >
                <img
                  src={update.image}
                  alt={updateTitle}
                  className="h-64 w-full rounded object-cover"
                />
                <h3 className="font-bold mt-2">{updateTitle}</h3>
                <p className="text-gray-600 dark:text-gray-400">{updateCategory}</p>
              </div>
            );
          })}
        </div>

        {/* 🔥 Popular News (o‘zgarmagan) */}
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <h3 className="font-bold">{t("Popular.h1")}</h3>
          <ul className="mt-2 space-y-2">
            {popular.map((news) => (
              <li
                key={news.id}
                className="border-b pb-1 cursor-pointer hover:text-blue-500"
                onClick={() => navigate(news.link)}
              >
                {news.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
