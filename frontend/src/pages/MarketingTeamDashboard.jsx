import { useEffect, useState } from "react";
import API from "../api";

export default function MarketingTeamDashboard() {
  const [ads, setAds] = useState([]);

  useEffect(() => {
    API.get("/ads").then((res) => setAds(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-purple-200 p-8">
      <h1 className="text-4xl font-extrabold text-purple-900 mb-4">Marketing Team Dashboard</h1>
      <p className="text-purple-700 mb-8">Create and manage ad campaigns, run promotions, and track engagement.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card title="Create Campaign" description="Design and launch new marketing campaigns." />
        <Card title="Manage Promotions" description="Monitor ongoing promotions and offers." />
        <Card title="Analytics" description="View campaign performance metrics and user engagement." />
      </div>

      <h2 className="text-3xl font-bold text-purple-900 mb-4">Available Ads</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ads.map((ad) => (
          <AdCard key={ad._id} ad={ad} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-200 hover:shadow-xl transition">
      <h2 className="text-xl font-bold mb-2 text-purple-900">{title}</h2>
      <p className="text-purple-600">{description}</p>
    </div>
  );
}

function AdCard({ ad }) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md border border-purple-100 hover:shadow-lg transition">
      <h3 className="text-lg font-bold mb-1 text-purple-900">{ad.title}</h3>
      <p className="text-purple-700">{ad.content}</p>
    </div>
  );
}
