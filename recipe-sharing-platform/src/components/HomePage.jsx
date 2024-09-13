import React from "react";
import { useState, useEffect } from "react";
import recipeData from "../data.json";

const HomePage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("data.json")
    //   .then((response) => response.json())
    //   .then((data) => setData(data));
    setData(recipeData);
  }, []);
  return (
    <div className="max-w-7xl mx-auto p-4 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {data.map((single) => (
          <div
            key={single.id}
            className="bg-white shadow-md rounded-lg p-6  hover:scale-105 transition transform duration-300"
          >
            <img
              src={single.image}
              alt={single.title}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <h2 className="text-lg font-bold mt-4 mb-2">{single.title}</h2>
            <p className="text-gray-600 text-sm">{single.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
