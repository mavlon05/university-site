import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Students() {
  const [students, setStudents] = useState([]);
  const { t,i18n } = useTranslation();


  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => setStudents(data.students))
      .catch((error) => console.error("Error loading students:", error));
  }, []);

  return (
    <div className="max-w-6xl mt-32 mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white tracking-tight">
          {t("Students.h1")}
        </h1>
        <p className="text-gray-400 text-base md:text-lg mt-2">
        {t("Students.p")}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {students.map((student) => (
          <Link to={`/students/${student.id}`} key={student.id}>
            <div className="relative group overflow-hidden bg-gray-900/80 p-6 rounded-lg shadow-xl transition-all duration-500 ease-out transform hover:-translate-y-2 hover:shadow-2xl">
              {/* Rasm */}
              <div className="relative w-full  rounded-lg overflow-hidden mb-4">
                <img
                  className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110"
                  src={student.image}
                  alt={student.name}
                />
              </div>

              {/* Ism va mutaxassislik */}
              <h1 className="text-lg font-semibold text-white text-center group-hover:text-blue-400">
                {student.name[i18n.language]}
              </h1>
              <p className="text-sm text-gray-400 text-center">{student.field[i18n.language]}</p>

              {/* Yutuqlar va izoh */}
              <div className="mt-3 text-gray-300 text-sm flex flex-col items-center gap-2">
                <p className="font-medium text-blue-300 text-center">{student.achievement[i18n.language]}</p>
                <p className="italic text-center line-clamp-2">{student.testimonial[i18n.language]}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
