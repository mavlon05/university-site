import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch("https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/univer/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ1bml2ZXIvZGIuanNvbiIsImlhdCI6MTc0NDE3OTI0MSwiZXhwIjoxNzc1NzE1MjQxfQ.r76rnG4fKTMFsVJS-wBYIP2gTNS5XJ2Flqa9Hj250zI")
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images);
        setCategories(data.categories);
        setSelectedCategory(data.categories.find(cat => cat.name.en === "All").name[i18n.language]);
      })
      .catch((error) => console.error("Error loading gallery:", error));
  }, [i18n.language]);

  const filteredImages =
    selectedCategory === categories.find(cat => cat.name.en === "All")?.name[i18n.language]
      ? images
      : images.filter(img => img.category === categories.find(cat => cat.name[i18n.language] === selectedCategory)?.name.en);

  return (
    <div className="p-6 mt-20">
      <h2 className="text-4xl font-bold text-black dark:text-white text-center mb-4">
        {t("Gallery.h1")}
      </h2>
      <p className="text-center text-gray-500 mb-6">
        {t("Gallery.p")}
      </p>

      <div className="flex justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name[i18n.language])}
            className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${
              selectedCategory === category.name[i18n.language]
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {category.name[i18n.language]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
        {filteredImages.map((img) => (
          <div
            key={img.id}
            className="relative group overflow-hidden rounded-lg mx-auto"
          >
            <img
              src={img.src}
              alt={img.title[i18n.language]}
              className="w-[280px] h-[200px] object-cover transition-all duration-300 transform group-hover:scale-105 rounded-lg"
            />
            <div className="absolute inset-0 border-teal-400 border-2 opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-lg"></div>
            <div className="absolute bottom-0 left-0 right-0 bg-slate-900 bg-opacity-90 text-white text-center p-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {img.title[i18n.language]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
