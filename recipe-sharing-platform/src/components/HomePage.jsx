import React from "react";
import { useState, useEffect } from "react";
import recipeData from '../data.json';

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("data.json")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    setData(recipeData);
  }, []);
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl hover:scale-105 transition transform duration-300">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {data.map((single) => (
            <div
              key={single.id}
              className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={single.image}
                alt={single.title}
                className="w-full h-32 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold mt-2">{single.title}</h2>
              <p className="text-gray-700">{single.summary}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
