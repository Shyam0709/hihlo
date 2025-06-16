import { useState, useEffect } from "react";
import API from "../api";

export default function CreateAd() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    // Fetch all cities for dropdown
    API.get("/cities")
      .then((res) => setCities(res.data))
      .catch(console.error);
  }, []);

  const handleCreateAd = async () => {
    if (!title || !content || !selectedCity) {
      alert("Please fill all fields!");
      return;
    }
    await API.post("/ads/create", {
      title,
      content,
      city: selectedCity,
    });
    alert("Ad created successfully!");
    setTitle("");
    setContent("");
    setSelectedCity("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-indigo-200 p-8">
      <h1 className="text-4xl font-extrabold text-indigo-900 mb-4">Create New Ad</h1>
      <div className="space-y-4 max-w-xl">
        <input
          className="w-full border border-indigo-300 rounded px-4 py-2"
          placeholder="Ad Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="w-full border border-indigo-300 rounded px-4 py-2"
          placeholder="Ad Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <select
          className="w-full border border-indigo-300 rounded px-4 py-2"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
        >
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city._id} value={city._id}>
              {city.name}
            </option>
          ))}
        </select>
        <button
          onClick={handleCreateAd}
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Create Ad
        </button>
      </div>
    </div>
  );
}
