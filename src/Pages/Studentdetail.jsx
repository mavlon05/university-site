import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function StudentDetail() {
  const { id } = useParams();
  const [studentData, setStudentData] = useState(null);
  window.scrollTo(0, 0);
  useEffect(() => {
    fetch("/db.json")
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.studentsdetails.find((item) => item.id === Number(id));
        setStudentData(foundItem);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id]);

  if (!studentData) {
    return <h1 className="text-center text-2xl font-bold mt-10">Loading...</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        {/* Chap taraf - Rasm */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-lg shadow-md border-4 border-gray-300 dark:border-gray-700"
            src={studentData.image}
            alt={studentData.name}
          />
        </div>

        {/* O'ng taraf - Ma'lumotlar */}
        <div className="w-full md:w-2/3 text-center md:text-left">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">{studentData.name}</h1>
          <p className="text-lg text-blue-500 font-semibold mt-2">{studentData.field}</p>
          <p className="text-gray-600 dark:text-gray-400 italic mt-2">{studentData.achievement}</p>
          <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{studentData.testimonial}</p>

          {/* Qo'shimcha ma'lumotlar */}
          <div className="mt-6 space-y-2 text-sm md:text-base">
            <p className="text-gray-800 dark:text-gray-300"><strong>📅 Tug'ilgan sana:</strong> {studentData.birthdate}</p>
            <p className="text-gray-800 dark:text-gray-300"><strong>📧 Email:</strong> {studentData.email}</p>
            <p className="text-gray-800 dark:text-gray-300"><strong>📞 Telefon:</strong> {studentData.phone}</p>
          </div>
        </div>
      </div>

      {/* Loyihalar, ko'nikmalar va qiziqishlar */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">📌 Loyihalar</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm md:text-base">
            {studentData.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">💡 Ko'nikmalar</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm md:text-base">
            {studentData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3">🎯 Qiziqishlar</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-400 text-sm md:text-base">
            {studentData.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
