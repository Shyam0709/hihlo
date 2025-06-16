import { useState } from "react";
import API from "../api";

export default function LoginForm({ role }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", { email, password, role });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      alert("Login success!");

      switch (role) {
        case "admin":
          window.location.href = "/dashboard/admin";
          break;
        case "citypartner":
          window.location.href = "/dashboard/citypartner";
          break;
        case "supportstaff":
          window.location.href = "/dashboard/supportstaff";
          break;
        case "marketingteam":
          window.location.href = "/dashboard/marketingteam";
          break;
        default:
          window.location.href = "/";
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data?.message || err.message);
      alert("Login failed: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-900 px-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-6 text-center capitalize">{role} Login</h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-600 focus:outline-none focus:border-indigo-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
