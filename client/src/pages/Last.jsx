import React from "react";
import { Link } from "react-router-dom"; // Assuming you are using react-router for navigation

export default function Last() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex flex-col justify-between overflow-hidden text-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/featured/aesthetic-green-minimal-75zbbk8f6qvw4i6s.jpg')",
      }}
    >
      <div className="p-6 max-w-lg mx-auto text-white shadow-lg bg-gradient-to-br from-green-200 to-white-500 bg-opacity-80 rounded-lg mt-1">
        <h1 className="text-2xl font-bold mb-4 text-gray-800">
          Thanks for Exploring PhysixLab!
        </h1>
        <p className="text-lg mb-4 text-gray-700">
          You've reached the end of our physics journey together. We hope you
          enjoyed learning about physics, equations, and much more!
        </p>
      </div>

      <div className="p-6 max-w-lg mx-auto text-white shadow-lg bg-gradient-to-br from-green-200 to-white-500 bg-opacity-80 rounded-lg mb-4">
        <p className="text-lg mb-4 text-gray-700 font-bold">
          Remember, physics is all around us, from the smallest particles to the
          vast cosmos. Keep exploring and stay curious!
        </p>
        <p className="text-base mt-4 text-gray-600">
          - Your Physics Learning Team
        </p>
      </div>
      <Link
        to="/home"
        className="absolute left-4 bottom-4 bg-teal-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg"
      >
        Home
      </Link>
    </div>
  );
}
