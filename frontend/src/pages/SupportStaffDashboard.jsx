import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import API from "../api";
import { QRCodeCanvas } from "qrcode.react";

export default function SupportStaffDashboard() {
  const [qrs, setQrs] = useState([]);

  useEffect(() => {
    API.get("/qr").then(res => setQrs(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-800 p-8 text-white">
      <h1 className="text-4xl font-extrabold mb-4">Support Staff Dashboard</h1>
      <p className="mb-8 text-green-200">
        Assist users, create QR/flyers, and manage codes.
      </p>
      <div className="absolute top-4 right-4">
        <Link to="/" >
            <button className="px-6 py-2 bg-indigo-600 hover:bg-red-400 rounded-lg text-white text-xl font-semibold shadow-md transition duration-300 transform hover:scale-3d  cursor-pointer">
              Logout
            </button>
          </Link>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card
          to="/create-qr"
          title="Create QR / Flyer"
          description="Generate and download QR codes for users."
        />
        <Card
          title="View User Profiles"
          description="Access user profiles and account info."
        />
        <Card
          title="Resend QR/Flyer"
          description="Quickly resend QR codes to users."
        />
      </div>

      <h2 className="text-3xl font-bold mb-4">Generated QR Codes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {qrs.map((qr) => (
          <QRCard key={qr._id} qr={qr} />
        ))}
      </div>
    </div>
  );
}

function Card({ title, description, to }) {
  const card = (
    <div className="bg-slate-900 border border-slate-700 p-6 rounded-lg hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-green-200">{description}</p>
    </div>
  );

  return to ? <Link to={to}>{card}</Link> : card;
}

function QRCard({ qr }) {
  return (
    <div className="bg-slate-900 border border-slate-700 p-4 rounded-lg text-center">
      <h3 className="text-lg font-bold mb-2">{qr.title}</h3>
      <QRCodeCanvas value={qr.content} size={150} />
      <p className="text-green-200 mt-2 break-words">{qr.content}</p>
    </div>
  );
}
