// pages/Home.jsx
import RoleButtons from "../components/RoleButtons";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-900 text-white px-6">
      
      <img src={logo} alt="Hihlo Logo" className=" w-1/6" />
      <h1 className="text-5xl font-extrabold mb-10 text-indigo-400 drop-shadow-lg text-center">
        Welcome to Hihlo
      </h1>

      <div className="w-full max-w-md mb-12">
        <RoleButtons />
      </div>

      <div className="flex flex-col items-center space-y-4 mb-8">
        <h3 className="text-xl font-medium">Or, sign up to get started:</h3>
        <Link to="/signup">
          <button className=" cursor-pointer px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md transition duration-200">
            Go to Signup
          </button>
        </Link>
      </div>

      <Link to="/">
        <button className="cursor-pointer  px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-white text-lg shadow-md transition duration-200">
          Back to Home
        </button>
      </Link>
    </div>
  );
}
