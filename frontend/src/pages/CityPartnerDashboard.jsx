import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import { FiFileText, FiUser, FiGrid } from "react-icons/fi";

// Reusable Card same style as AdminDashboard
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

export default function CityPartnerDashboard() {
  const [ads, setAds] = useState([]);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    API.get("/ads").then((res) => setAds(res.data)).catch(console.error);
    API.get("/profiles").then((res) => setProfiles(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 to-blue-800 text-white p-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold">City Partner Dashboard</h1>
          <p className="text-gray-400 mt-3">Manage ads and users in your assigned city.</p>
        </div>

        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <Card
            to="/manage-ads"
            icon={FiFileText}
            title="Manage Ads"
            description="Create, edit, or remove local advertisements."
          />
          <Card
            to="/directory"
            icon={FiGrid}
            title="User Directory"
            description="View and manage users within your city."
          />
        </div>

        {/* Available Ads */}
        <h2 className="text-3xl font-bold mb-4">Available Ads</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
          {ads.map((ad) => (
            <AdCard key={ad._id} ad={ad} />
          ))}
        </div>

        {/* User Directory — same card grid style */}
        <h2 className="text-3xl font-bold mb-4">User Directory</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <Card
              key={profile._id}
              icon={FiUser}
              title={profile.name}
              description={`Email: ${profile.email}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

function AdCard({ ad }) {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 transition hover:border-indigo-500 hover:shadow-xl hover:shadow-indigo-500/20 hover:-translate-y-1 duration-300">
      <h3 className="text-xl font-bold mb-2 text-white">{ad.title}</h3>
      <p className="text-gray-400">{ad.content}</p>
    </div>
  );
}
