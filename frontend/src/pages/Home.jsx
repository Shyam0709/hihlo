// pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import RoleButtons from "../components/RoleButtons";
import logo from "../assets/logo.png";

// Icons
import {
  FaBuilding,
  FaCity,
  FaUsers,
  FaStar,
  FaUtensils,
  FaClinicMedical,
  FaBook,
  FaSpa,
  FaShoppingBag,
  FaBriefcase,
  FaHome,
  FaCar,
} from "react-icons/fa";

export default function Home() {
  const [showRoles, setShowRoles] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white via-gray-50 to-gray-100 text-gray-800">
      {/* --- Navbar --- */}
      <header className="w-full flex justify-between items-center px-8 py-4 fixed top-0 left-0 z-50 bg-white bg-opacity-90 backdrop-blur shadow-md">
        <div className="flex items-center gap-4">
          <img src={logo} alt="Hihlo Logo" className="w-16 drop-shadow-md" />
        </div>
        <nav className="flex gap-6 text-gray-700 font-medium">
          <a href="#hero" className="hover:text-indigo-600 transition">Home</a>
          <a href="#directory" className="hover:text-indigo-600 transition">Directory</a>
          <a href="#cities" className="hover:text-indigo-600 transition">Cities</a>
          <a href="#categories" className="hover:text-indigo-600 transition">Categories</a>
          <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
        </nav>
      </header>

      {/* --- Hero Section --- */}
      <section id="hero" className="flex flex-col items-center justify-center flex-1 pt-40 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-indigo-600 text-center">
          Welcome to Hihlo
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-600 mb-6 text-center">
          Connect, Collaborate, and Grow Together
        </h2>
        <p className="max-w-2xl text-center text-gray-500 mb-12">
          Hihlo is your trusted directory for verified businesses across cities
          and industries. Find what you need, when you need it.
        </p>

        <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
          <Link to="/signup">
            <button className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-xl font-semibold shadow-md transition duration-300 transform hover:scale-105">
              Sign Up
            </button>
          </Link>

          <button
            onClick={() => setShowRoles(!showRoles)}
            className="px-8 py-4 bg-gray-700 hover:bg-gray-800 rounded-lg text-white text-xl font-semibold shadow-md transition duration-300 transform hover:scale-105"
          >
            {showRoles ? "Hide Options" : "Login"}
          </button>
        </div>

        {showRoles && (
          <div className="w-full max-w-md mb-12">
            <RoleButtons />
          </div>
        )}
      </section>

      {/* --- About Section --- */}
      <section id="directory" className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
            About Hihlo
          </h3>
          <p className="text-gray-600 text-lg mb-4">
            Discover verified local businesses in over 50 cities. Hihlo connects
            you with trusted service providers, making it easy to find exactly
            what you’re looking for — from food to healthcare, education, and
            more.
          </p>
        </div>
      </section>

      {/* --- Stats Section --- */}
      <section id="cities" className="px-6 py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaBuilding className="mx-auto text-4xl text-indigo-600 mb-4" />
            <h4 className="text-xl font-bold mb-2">5,000+ Verified Businesses</h4>
            <p className="text-gray-500">
              Trustworthy listings vetted for quality and accuracy.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaCity className="mx-auto text-4xl text-indigo-600 mb-4" />
            <h4 className="text-xl font-bold mb-2">50+ Cities Covered</h4>
            <p className="text-gray-500">
              Expanding reach across urban and rural communities.
            </p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <FaUsers className="mx-auto text-4xl text-indigo-600 mb-4" />
            <h4 className="text-xl font-bold mb-2">10,000+ Active Users</h4>
            <p className="text-gray-500">
              Thousands trust Hihlo for everyday needs.
            </p>
          </div>
        </div>
      </section>

      {/* --- User Rating & Categories --- */}
      <section id="categories" className="px-6 py-20 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <FaStar className="mx-auto text-5xl text-yellow-400 mb-4" />
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
            4.8/5 User Rating
          </h3>
          <p className="text-gray-600 mb-12">
            Our community loves Hihlo for trust, ease of use, and reliable
            connections.
          </p>

          <h4 className="text-2xl font-bold text-indigo-600 mb-6">
            Popular Business Categories
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
            {[
              [<FaUtensils />, "Restaurants & Food", 892],
              [<FaClinicMedical />, "Healthcare & Medical", 743],
              [<FaBook />, "Education & Training", 654],
              [<FaSpa />, "Beauty & Wellness", 587],
              [<FaShoppingBag />, "Retail & Shopping", 523],
              [<FaBriefcase />, "Professional Services", 467],
              [<FaHome />, "Home & Garden", 398],
              [<FaCar />, "Automotive", 342],
            ].map(([icon, category, count]) => (
              <div
                key={category}
                className="p-4 bg-gray-50 rounded-lg shadow hover:shadow-md transition"
              >
                <div className="flex items-center mb-2 text-indigo-600 text-2xl">
                  {icon}
                  <h5 className="ml-3 text-lg font-semibold text-gray-800">
                    {category}
                  </h5>
                </div>
                <p className="text-gray-500 ml-9">{count} businesses</p>
              </div>
            ))}
          </div>

          <button className="mt-8 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg font-semibold shadow-md transition duration-300 transform hover:scale-105">
            View All Categories
          </button>
        </div>
      </section>

      {/* --- Contact --- */}
      <section id="contact" className="px-6 py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-indigo-600 mb-6">
            Contact Us
          </h3>
          <p className="text-gray-600 mb-8">
            Need help, suggestions, or partnership opportunities? We'd love to
            hear from you.
          </p>
          <a
            href="mailto:contact@hihlo.com"
            className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg font-semibold shadow-md transition duration-300 transform hover:scale-105"
          >
            Write to Us
          </a>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="px-6 py-8 bg-white border-t text-center text-gray-500">
        &copy; {new Date().getFullYear()} Hihlo. All rights reserved. |{" "}
        <a
          href="mailto:contact@hihlo.com"
          className="text-indigo-600 hover:underline"
        >
          contact@hihlo.com
        </a>
      </footer>
    </div>
  );
}
