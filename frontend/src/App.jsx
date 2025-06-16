import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignupForm from "./components/SignupForm";
import RoleButtons from "./components/RoleButtons";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./pages/AdminDashboard";
import CityPartnerDashboard from "./pages/CityPartnerDashboard";
import SupportStaffDashboard from "./pages/SupportStaffDashboard";
import MarketingTeamDashboard from "./pages/MarketingTeamDashboard";
import Home from "./pages/Home";
import ProfileBuilder from "./pages/ProfileBuilder";
import Directory from "./pages/Directory";
import CreateAd from "./pages/CreateAd";
import CreateQRPage from "./pages/CreateQRPage";
import ManageCities from "./pages/ManageCities";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Auth pages */}
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login/admin" element={<LoginForm role="admin" />} />
        <Route path="/login/citypartner" element={<LoginForm role="citypartner" />} />
        <Route path="/login/supportstaff" element={<LoginForm role="supportstaff" />} />
        <Route path="/login/marketingteam" element={<LoginForm role="marketingteam" />} />

        {/* Dashboard pages */}
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/citypartner" element={<CityPartnerDashboard />} />
        <Route path="/dashboard/supportstaff" element={<SupportStaffDashboard />} />
        <Route path="/dashboard/marketingteam" element={<MarketingTeamDashboard />} />

        <Route path="/profile" element={<ProfileBuilder/>}/>
        <Route path="/directory" element={<Directory/>}/>
        <Route path="/ads" element={<CreateAd/>}/>
        <Route path="/create-qr" element={<CreateQRPage />} />
        <Route path="/manage-cities" element={<ManageCities />} />
      </Routes>
    </BrowserRouter>
  );
}
