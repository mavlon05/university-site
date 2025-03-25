import "./index.css";
import Layout from "./Components/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Homebox from "./Pages/Homebox";
import About from "./Pages/About";
import Services from "./Pages/Services";
import ServicePage from "./Pages/ServicePage";
import NewsPage from "./Pages/NewsPage";
import NewsDetail from "./Pages/NewsDetail";
import ProfessorAward from "./Pages/ProfessorAward";
import TechPartnership from "./Pages/TechPartnership";
import LibraryOpening from "./Pages/LibraryOpening";
import Statisticdetails from "./Pages/Statisticdetails";
import StudentDetail from "./Pages/Studentdetail"; 
import NotFound from "./Components/NotFound";
import TeamDetail from "./Pages/TeamDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Homebox /> },
      { path: "about", element: <About /> },
      {path:"*",element:<NotFound/>},
      { path: "services", element: <Services /> },
      { path: "services/:serviceId", element: <ServicePage /> },
      { path: "NewsPage", element: <NewsPage /> },
      { path: "news/:newsId", element: <NewsDetail /> },
      { path: "news/professor-award", element: <ProfessorAward /> },
      { path: "news/tech-partnership", element: <TechPartnership /> },
      { path: "news/library-opening", element: <LibraryOpening /> },
      { path: "statistics/:id", element: <Statisticdetails /> },
      { path: "students/:id", element: <StudentDetail/> },
      { path: "ourTeams/:id", element: <TeamDetail/> }
    ],
  },
]);

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <RouterProvider router={router} />
    </div>
  );
}
