import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Statisticdetails() {
  const { id } = useParams(); // URL dan ID ni olish
  const [detail, setDetail] = useState(null);
  window.scrollTo(0, 0);

  useEffect(() => {
    fetch("https://pseozdrbextiztvqclhf.supabase.co/storage/v1/object/sign/db/db.json?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkYi9kYi5qc29uIiwiaWF0IjoxNzQyODk0NDMzLCJleHAiOjE3NzQ0MzA0MzN9.fNhUFouExxZBgJJMpQFqchlkbMvRZ90RlIl4MTxBBRk")
      .then((res) => res.json())
      .then((data) => {
        const foundItem = data.Statisticdetails.find((item) => item.id === parseInt(id));
        setDetail(foundItem);
      })
      .catch((error) => console.error("Error loading data:", error));
  }, [id]);

  if (!detail) return <h1 className="text-center text-2xl font-bold mt-10">Loading...</h1>;

  return (
    <div className="p-6 max-w-6xl  mx-auto bg-slate-300 dark:bg-gray-800 shadow-lg rounded-lg mt-10 text-black dark:text-white">
      <h1 className="text-4xl font-bold text-center text-black dark:text-white">{detail.title}</h1>
      <div className="flex flex-col items-center mt-6">
        <img
          src={detail.image}
          alt={detail.title}
          className="w-[500px]  h-[250px] sm:w-[600px] sm:h-[370px] md:w-[900px] md:h-[450px]  object-cover rounded-xl shadow-md"
        />
        <p className="text-gray-700 dark:text-gray-300 mt-4 text-lg text-center leading-relaxed">{detail.description}</p>
        <div className="mt-6 w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
          <div className="bg-blue-100 dark:bg-blue-800 p-4 rounded-lg shadow-sm">
            <p className="text-xl font-semibold text-blue-800 dark:text-blue-200">{detail.totalMembers}</p>
          </div>
          <div className="bg-green-100 dark:bg-green-800 p-4 rounded-lg shadow-sm">
            <p className="text-xl font-semibold text-green-800 dark:text-green-200">{detail.achievements}</p>
          </div>
          <div className="bg-yellow-100 dark:bg-yellow-700 p-4 rounded-lg shadow-sm">
            <p className="text-xl font-semibold text-yellow-800 dark:text-yellow-200">{detail.researchProjects}</p>
          </div>
          <div className="bg-purple-100 dark:bg-purple-800 p-4 rounded-lg shadow-sm">
            <p className="text-xl font-semibold text-purple-800 dark:text-purple-200">{detail.publications}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Statisticdetails;
