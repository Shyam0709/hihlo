import { useState, useEffect } from "react";

export default function Directory() {
  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [profiles, setProfiles] = useState([]);

  // ✅ Hardcoded profiles
  const hardcoded = [
    {
      name: "Alice",
      city: "New York",
      category: "Plumbing",
      contact: "alice@example.com",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
    },
    {
      name: "Bob",
      city: "Los Angeles",
      category: "Electrician",
      contact: "bob@example.com",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Charlie",
      city: "Chicago",
      category: "Cleaning",
      contact: "charlie@example.com",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      name: "David",
      city: "New York",
      category: "Painting",
      contact: "david@example.com",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
    },
    {
      name: "Evelyn",
      city: "Houston",
      category: "Carpentry",
      contact: "evelyn@example.com",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
    },
    {
      name: "Frank",
      city: "Phoenix",
      category: "AC Repair",
      contact: "frank@example.com",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
    },
    {
      name: "Grace",
      city: "Philadelphia",
      category: "Gardening",
      contact: "grace@example.com",
      image: "https://randomuser.me/api/portraits/women/7.jpg",
    },
    {
      name: "Hannah",
      city: "San Diego",
      category: "Babysitting",
      contact: "hannah@example.com",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
    },
  ];

  // ✅ Fetch DB profiles once
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/profile/profiles");
        const data = await res.json();

        // Map DB profiles to same shape:
        const mapped = data.map((p) => ({
          name: p.name,
          city: p.location,
          category: p.services,
          contact: p.contact,
          image: "https://via.placeholder.com/150", // or p.photos if it has a valid URL
        }));

        setProfiles(mapped);
      } catch (err) {
        console.error("Failed to fetch profiles:", err);
      }
    };
    fetchProfiles();
  }, []);

  // ✅ Combine: hardcoded + fetched
  const directoryData = [...hardcoded, ...profiles];

  const cities = ["All", ...Array.from(new Set(directoryData.map((item) => item.city)))];
  const categories = ["All", ...Array.from(new Set(directoryData.map((item) => item.category)))];

  let filtered = directoryData.filter(
    (item) =>
      (item.name?.toLowerCase().includes(search.toLowerCase()) ||
        item.city?.toLowerCase().includes(search.toLowerCase()) ||
        item.category?.toLowerCase().includes(search.toLowerCase())) &&
      (selectedCity === "" || selectedCity === "All" || item.city === selectedCity) &&
      (selectedCategory === "" || selectedCategory === "All" || item.category === selectedCategory)
  );

  if (sortBy === "name") {
    filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "city") {
    filtered = [...filtered].sort((a, b) => a.city.localeCompare(b.city));
  }

  const resetFilters = () => {
    setSearch("");
    setSelectedCity("");
    setSelectedCategory("");
    setSortBy("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">
          City & Category Wise Directory
        </h2>

        {/* Controls */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 justify-center mb-8">
          <input
            className="w-full md:w-1/4 px-4 py-3 rounded-lg bg-slate-800 text-white placeholder-gray-400 border border-slate-700 focus:outline-none focus:border-indigo-500"
            placeholder="Search by name, city, or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            className="w-full md:w-1/6 px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
          >
            {cities.map((city, idx) => (
              <option key={idx} value={city}>
                {city}
              </option>
            ))}
          </select>

          <select
            className="w-full md:w-1/6 px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map((cat, idx) => (
              <option key={idx} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <select
            className="w-full md:w-1/6 px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="city">City</option>
          </select>

          <button
            onClick={resetFilters}
            className="w-full md:w-auto px-4 py-3 rounded-lg bg-red-600 hover:bg-red-700 transition-colors"
          >
            Reset Filters
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-900 border border-slate-700 hover:border-indigo-500 p-6 rounded-lg shadow-md hover:shadow-indigo-500/30 transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-500"
                />
                <h3 className="text-2xl font-semibold text-indigo-400 mb-2 text-center">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-center">
                  <span className="font-medium text-white">City:</span>{" "}
                  {item.city}
                </p>
                <p className="text-gray-400 text-center">
                  <span className="font-medium text-white">Category:</span>{" "}
                  {item.category}
                </p>
                <p className="text-gray-400 text-center">
                  <span className="font-medium text-white">Contact:</span>{" "}
                  {item.contact}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
