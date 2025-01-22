import React from "react";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 to bg-indigo-600 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center">
      <div className="pt-2 pb-6 mx-auto max-w-7xl">
        <div className="max-w-2xl mx-auto"> 
        <h1 className="font-bold text-white text-4xl pb-4">
          Find the best course for you
        </h1>
        <p className="pb-6 text-white">
          Discover, Learn, and Upskill with our wide range of courses
        </p>
        <form action="" className="flex items-center bg-white dark:bg-gray-800 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6">
          <input type="text" placeholder="Search Courses" 
           className="w-full outline-none rounded-lg px-4 text-gray-900 dark:text-gray-100
          placeholder-gray-400 dark:placeholder-gray-500"
          />
          <button className="text-white bg-blue-600 dark:bg-blue-700 hover:bg-blue-700
          dark:hover:bg-blue-800 px-6 py-3 rounded-r">Search</button>
        </form>
        <button className="mt-6 text-blue-500 bg-white dark:bg-gray-800 hover:bg-gray-200 rounded-full px-4 py-2">Explore Courses</button>
        </div>
       
      </div>
    </div>
  );
};

export default HeroSection;
