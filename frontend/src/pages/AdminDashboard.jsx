import { Link } from "react-router-dom";
import {
  FiUser,
  FiGrid,
  FiUsers,
  FiSettings,
  FiBarChart2,
  FiBell,
  FiPlus,
  FiFilePlus,
  FiMapPin, // ✅ new icon for ads
} from "react-icons/fi";

function Card({ to, icon: Icon, title, description }) {
  const card = (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 text-center transition hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1 duration-300 cursor-pointer">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-slate-800 group-hover:bg-indigo-500 transition">
          <Icon className="h-6 w-6 text-indigo-400 group-hover:text-white" />
        </div>
      </div>
      <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
      <p className="text-gray-400">{description}</p>
    </div>
  );

  return to ? (
    <Link to={to} className="group">{card}</Link>
  ) : (
    <div className="group">{card}</div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">Admin Dashboard</h1>
          <p className="text-gray-400 mt-3">Manage your entire system from one place.</p>
          <div className="flex justify-center gap-4 mt-6">
            <button className="flex items-center bg-indigo-600 px-5 py-2 rounded hover:bg-indigo-700 transition">
              <FiPlus className="mr-2" /> New Task
            </button>
            <button className="p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition">
              <FiBell />
            </button>
          </div>
        </div>
        <div className="absolute top-4 right-4">
        <Link to="/" >
            <button className="px-6 py-2 bg-indigo-600 hover:bg-red-400 rounded-lg text-white text-xl font-semibold shadow-md transition duration-300 transform hover:scale-3d  cursor-pointer">
              Logout
            </button>
          </Link>
        </div>
        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card
            to="/profile"
            icon={FiUser}
            title="Build Profile"
            description="Create or update your profile details."
          />
          <Card
            to="/directory"
            icon={FiGrid}
            title="View Directory"
            description="Explore city or category-wise directories."
          />
          <Card
            to="/ads"
            icon={FiFilePlus}
            title="Create Ads"
            description="Create promotional ads for all users to view."
          />
          <Card
            icon={FiUsers}
            title="User Management"
            description="Manage users and roles."
          />
          <Card
          to="/manage-cities"
          icon={FiMapPin} // or any city icon
          title="Manage Cities"
          description="Add, edit, and view available cities."
          />
          <Card
            icon={FiBarChart2}
            title="Reports & Analytics"
            description="View usage data and reports."
          />
        </div>
      </div>
    </div>
  );
}
