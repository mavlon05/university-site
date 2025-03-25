import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function OurTeam() {
  const { t,i18n } = useTranslation();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch('https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODk0NDMzLCJleHAiOjE3NzQ0MzA0MzN9.fNhUFouExxZBgJJMpQFqchlkbMvRZ90RlIl4MTxBBRk')
      .then((res) => res.json())
      .then((data) => setTeam(data.TemDetail))
      .catch((error) => console.error("Error fetching team data:", error));
  }, []);

  return (
    <div className="text-center py-16 text-black dark:text-white">
      <h1 className="text-5xl font-bold mb-10 tracking-wide">{t("AboutTeam.h1")}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto items-stretch">
        {team.map((item) => (
          <Link to={`/OurTeams/${item.id}`} key={item.id}>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex flex-col items-center transition-all transform hover:scale-105 hover:bg-gray-700 duration-300  h-full">
              <img
                className="w-48 h-56 mb-4 rounded-lg border-2 object-cover border-gray-600 shadow-md"
                src={item.img}
                alt={item.name}
              />
              <h3 className="text-2xl font-semibold text-white">{item.name[i18n.language]}</h3>
              <p className="text-blue-400 text-lg font-medium mb-2">{item.title[i18n.language]}</p>
              <p className="text-gray-300 text-sm text-center px-4 flex-grow">{item.description[i18n.language]}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
