import React from "react";

const page = () => {
  return (
    <div className="mt-[4rem]  bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg animate-pulse">
        {/* Title */}
        <div className="h-8 bg-gray-300 rounded w-3/4 mb-4"></div>

        {/* Date */}
        <div className="h-4 bg-gray-300 rounded w-1/4 mb-6"></div>

        {/* Image */}
        <div className="h-64 bg-gray-300 rounded-lg mb-6"></div>

        {/* Paragraph lines */}
        <div className="space-y-4">
          <div className="h-4 bg-gray-300 rounded w-full"></div>
          <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          <div className="h-4 bg-gray-300 rounded w-4/6"></div>
          <div className="h-4 bg-gray-300 rounded w-3/5"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
