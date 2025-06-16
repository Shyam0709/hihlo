import { useState, useEffect } from "react";
import API from "../api";

export default function ManageCities() {
  const [cities, setCities] = useState([]);
  const [cityName, setCityName] = useState("");

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    const res = await API.get("/cities");
    setCities(res.data);
  };

  const handleAddCity = async () => {
    if (!cityName) return alert("City name is required!");
    await API.post("/cities/create", { name: cityName });
    setCityName("");
    fetchCities();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200 p-8">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">Manage Cities</h1>
      <p className="text-indigo-700 mb-8">Add, view, and manage city listings.</p>

      <div className="mb-8 flex gap-4">
        <input
          className="border border-indigo-300 rounded px-4 py-2"
          placeholder="New City Name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button
          onClick={handleAddCity}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          Add City
        </button>
      </div>

      <h2 className="text-2xl font-bold mb-4 text-indigo-900">Existing Cities</h2>
      <ul className="space-y-2">
        {cities.map((city) => (
          <li key={city._id} className="bg-white p-4 rounded shadow border border-indigo-200">
            {city.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
