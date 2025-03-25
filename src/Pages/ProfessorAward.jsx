import { useTranslation } from "react-i18next";

const ProfessorAward = () => {
  const { t} = useTranslation();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">{t("Popular.p1")}</h1>
        <img src="/Images/Images2/Images3/popular1.jpg" alt="Professor Award" className="w-full h-[450px] unded-lg my-4 object-cover" />
        <p className="text-gray-700 dark:text-gray-300">
          A distinguished professor from the university has received a prestigious international award for groundbreaking research in environmental science.
        </p>
      </div>
    </div>
  );
};

export default ProfessorAward;
