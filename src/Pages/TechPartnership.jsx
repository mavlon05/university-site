const LibraryOpening = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen p-4">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold">Leadership Book Presented to University Library</h1>
        <img
          src="/Images/Images2/Images3/popular2.jpg"
          alt="Leadership Book Presentation"
          className="w-full h-[450px] rounded-lg my-4 object-cover"
        />
        <p className="text-gray-700 dark:text-gray-300">
          A special event was held at the university library to present the book "Leadership Book." 
          The event was attended by renowned professionals and university officials who shared insights 
          on leadership and success strategies for students.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mt-2">
          The book is now available at the university library, allowing students to explore leadership 
          principles and develop essential management skills.
        </p>
      </div>
    </div>
  );
};

export default LibraryOpening;
