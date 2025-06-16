// components/RoleButtons.jsx
import { Link } from "react-router-dom";

export default function RoleButtons() {
  return (
    <div className="flex flex-col space-y-4 items-center">
      <Link to="/login/admin">
        <button className="cursor-pointer w-64 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md transition duration-200">
          Admin Login
        </button>
      </Link>
      <Link to="/login/citypartner">
        <button className="cursor-pointer w-64 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md transition duration-200">
          City Partner Login
        </button>
      </Link>
      <Link to="/login/supportstaff">
        <button className="cursor-pointer w-64 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md transition duration-200">
          Support Staff Login
        </button>
      </Link>
      <Link to="/login/marketingteam">
        <button className="cursor-pointer w-64 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md transition duration-200">
          Marketing Team Login
        </button>
      </Link>
    </div>
  );
}
