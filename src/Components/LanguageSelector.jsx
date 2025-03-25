import { useState } from "react";
import { ChevronDown, Globe } from "lucide-react";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("English");

  const languages = ["English", "O‘zbek"];

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gradient-to-b from-gray-700 to-gray-900 text-white px-4 py-2 rounded-lg shadow-md hover:opacity-90 focus:outline-none"
      >
        <Globe size={18} />
        <span>{selectedLang}</span>
        <ChevronDown size={18} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden">
          {languages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setSelectedLang(lang);
                setIsOpen(false);
              }}
              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
