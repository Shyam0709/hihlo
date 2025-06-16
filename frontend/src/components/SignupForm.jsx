import { useState } from "react";
import API from "../api";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("admin");

  const sendOtp = async () => {
    try {
      await API.post("/auth/send-otp", { email });
      setOtpSent(true);
      alert("OTP sent!");
    } catch (err) {
      alert("Error sending OTP: " + err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await API.post("/auth/signup", { email, password, role, otp });
      alert("Signup successful! You can now login.");
      window.location.href = "/";
    } catch (err) {
      alert("Signup failed: " + err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-indigo-900 px-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-xl p-8 shadow-lg text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

        <div className="space-y-5">
          <input
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-600 focus:outline-none focus:border-indigo-500"
            type="email"
            required
          />

          {!otpSent && (
            <button
              onClick={sendOtp}
              className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white text-lg shadow-md transition duration-200"
            >
              Send OTP
            </button>
          )}

          {otpSent && (
            <>
              <input
                placeholder="Enter OTP"
                value={otp}
                onChange={e => setOtp(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-600 focus:outline-none focus:border-indigo-500"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-600 focus:outline-none focus:border-indigo-500"
                required
              />

              <select
                value={role}
                onChange={e => setRole(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-900 text-white border border-slate-600 focus:outline-none focus:border-indigo-500"
              >
                <option value="admin">Admin</option>
                <option value="citypartner">City Partner</option>
                <option value="supportstaff">Support Staff</option>
                <option value="marketingteam">Marketing Team</option>
              </select>

              <button
                onClick={handleSignup}
                className="w-full px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg text-white text-lg shadow-md transition duration-200"
              >
                Signup
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
