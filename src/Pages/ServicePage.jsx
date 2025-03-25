import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ServicePage = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("/db.json")
      .then((response) => response.json())
      .then((data) => {
        const foundService = data.services.find((s) => s.id === serviceId);
        setService(foundService);
      })
      .catch((error) => console.error("Error loading service data:", error));
  }, [serviceId]);

  if (!service) {
    return <div className="text-center text-red-500 text-xl">Service not found!</div>;
  }

  return (
    <div className=" w-full h-full p-8 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <img src={service.image} alt={service.title} className="w-full h-[400px] object-cover" />
        <div className="p-6"> 
          <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
          <p className="text-lg mb-4">{service.description}</p>
          <p className="text-md text-gray-700 dark:text-gray-300">{service.details}</p>
          <h3 className="text-2xl font-semibold mt-6 mb-2">Benefits:</h3>
          <ul className="list-disc pl-6 space-y-2">
            {service.benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
