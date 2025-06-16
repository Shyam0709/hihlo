import AdminDashboard from "./AdminDashboard";
import CityPartnerDashboard from "./CityPartnerDashboard";
import SupportStaffDashboard from "./SupportStaffDashboard";
import MarketingTeamDashboard from "./MarketingTeamDashboard";

export default function Dashboard() {
  const role = localStorage.getItem("role");

  if (role === "admin") return <AdminDashboard />;
  if (role === "citypartner") return <CityPartnerDashboard />;
  if (role === "supportstaff") return <SupportStaffDashboard />;
  if (role === "marketingteam") return <MarketingTeamDashboard />;

  return <h2>Invalid Role or Not Logged In</h2>;
}
