import { useParams, useNavigate } from "react-router-dom";

const newsDetails = {
  "student-science-fair": {
    title: "Student Science Fair Breaks Records",
    image: "/Images/Images2/Images3/new2.jpg",
    content: "A groundbreaking student fair showcasing scientific innovation.",
  },
  "alumni-donation": {
    title: "Alumni Donation Revamps Campus Facilities",
    image: "/Images/Images2/Images3/new3.jpg",
    content: "Generous alumni donations transform campus infrastructure.",
  },
  "guest-lecture": {
    title: "Guest Lecture by Nobel Laureate",
    image: "/Images/Images2/Images3/new4.jpg",
    content: "A Nobel laureate shares insights on scientific breakthroughs.",
  },
  "sports-day": {
    title: "Annual Sports Day: A Thrilling Success",
    image: "/Images/Images2/Images3/new5.jpg",
    content: "Exciting sports events bring students together.",
  },
  "internship-opportunities": {
    title: "New Internship Opportunities for Students",
    image: "/Images/Images2/Images3/new6.jpg",
    content: "New industry collaborations open doors for students.",
  },
  "international-conference": {
    title: "University Hosts International Conference",
    image: "/Images/Images2/Images3/new7.jpg",
    content: "Scholars gather to discuss global academic trends.",
  },
  "ai-research-lab": {
    title: "New AI Research Lab Opens",
    image: "/Images/Images2/Images3/new8.jpg",
    content: "Pioneering AI research begins at the new university lab.",
  },
};

const NewsDetail = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const news = newsDetails[newsId];

  if (!news) {
    return <h2 className="text-center text-red-500">News not found</h2>;
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 mb-4"
        >
          ← Back
        </button>
        <img src={news.image} alt={news.title} className="w-full h-[450px] object-cover rounded-lg mb-4" />
        <h2 className="text-2xl font-bold">{news.title}</h2>
        <p className="text-gray-600 dark:text-gray-400 mt-2">{news.content}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
