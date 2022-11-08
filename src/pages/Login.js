import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const navigateToPurchase = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden -ml-60">
      <div className="w-full p-10 m-auto bg-white rounded-2xl shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-blue-700 ">
          로그인
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Id
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-blue-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <Link to="/dashboard">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-700 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
