import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Kechirasiz, bunday sahifa topilmadi!
      </h1>
      <button
        onClick={() => navigate(-1)}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
      >
        Orqaga qaytish
      </button>
    </div>
  );
};

export default NotFound;
