import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function TeamDetail() {
  const { id } = useParams();
  window.scrollTo(0, 0);
  const [member, setMember] = useState(null);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundMember = data.TemDetail.find((m) => m.id === parseInt(id));
        setMember(foundMember);
      })
      .catch((error) => console.error("Xatolik yuz berdi:", error));
  }, [id]);

  if (!member) {
    return (
      <div className="text-center py-16 text-red-500">
        Jamoa a’zosi topilmadi yoki yuklanmoqda...
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center overflow-hidden   bg-white dark:bg-slate-900 text-white p-4">
      <div className="bg-gray-800 p-8 rounded-xl shadow-lg w-[700px] h-[6   00px] text-center">
        <img
          src={member.img}
          alt={member.name}
          className="w-[250px] h-[250px] object-cover rounded-full mx-auto border- border-blue-500"
        />
        <h2 className="text-2xl font-bold mt-4">
          {member.name[i18n.language]}
        </h2>
        <h3 className="text-blue-400 text-lg font-semibold">
          {member.title[i18n.language]}
        </h3>
        <p className="text-gray-300 mt-4">
          {member.description[i18n.language]}
        </p>
        <p className="text-gray-400 mt-2">
          <strong>Tajriba:</strong> {member.experience[i18n.language]}
        </p>
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-blue-400">Loyihalari:</h4>
          <ul className="list-disc list-inside text-gray-300">
            {Array.isArray(member.projects?.uz) &&
              member.projects.uz.map((project, index) => (
                <p key={index}>{project}</p>
              ))}
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-blue-400">
            Ijtimoiy tarmoqlar:
          </h4>
          <div className="flex justify-center gap-4 mt-2">
            {member.social.telegram && (
              <a
                href={member.social.telegram}
                target="_blank"
                className="text-blue-500"
              >
                telegram
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetail;
