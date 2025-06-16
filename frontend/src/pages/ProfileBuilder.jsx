import { useState } from "react";

export default function ProfileBuilder() {
  const [profile, setProfile] = useState({
    name: "",
    about: "",
    photos: "",
    contact: "",
    location: "",
    services: "",
    socialLinks: "",
    themes: "",
  });

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/profile/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    });

    if (response.ok) {
      alert("Profile saved to database!");
      setProfile({
        name: "",
        about: "",
        photos: "",
        contact: "",
        location: "",
        services: "",
        socialLinks: "",
        themes: "",
      });
    } else {
      alert("Failed to save profile. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("An error occurred while saving profile.");
  }
};

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-3xl mx-auto bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-700">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-400">Profile Builder</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 text-gray-400">Name</label>
            <input
              name="name"
              value={profile.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">About</label>
            <textarea
              name="about"
              value={profile.about}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="Write about yourself"
              rows="4"
              required
            ></textarea>
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Profile Photo URL</label>
            <input
              name="photos"
              value={profile.photos}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="e.g. https://example.com/photo.jpg"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Contact Info</label>
            <input
              name="contact"
              value={profile.contact}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="Email or phone"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Location</label>
            <input
              name="location"
              value={profile.location}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="City, State"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Services (comma separated)</label>
            <input
              name="services"
              value={profile.services}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="e.g. Plumbing, Electrical"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Social Links</label>
            <input
              name="socialLinks"
              value={profile.socialLinks}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="e.g. https://linkedin.com/in/yourprofile"
            />
          </div>

          <div>
            <label className="block mb-1 text-gray-400">Preferred Theme</label>
            <input
              name="themes"
              value={profile.themes}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:border-indigo-500"
              placeholder="Dark, Light, etc."
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors font-semibold"
          >
            Save Profile
          </button>
        </form>
      </div>

      {/* Optional Preview */}
      {profile.name && (
        <div className="max-w-3xl mx-auto mt-12 bg-slate-900 p-6 rounded-lg border border-slate-700">
          <h3 className="text-2xl font-bold text-indigo-400 mb-4">Profile Preview</h3>
          {profile.photos && (
            <img
              src={profile.photos}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-2 border-indigo-500 mb-4"
            />
          )}
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>About:</strong> {profile.about}</p>
          <p><strong>Contact:</strong> {profile.contact}</p>
          <p><strong>Location:</strong> {profile.location}</p>
          <p><strong>Services:</strong> {profile.services}</p>
          <p><strong>Social Links:</strong> {profile.socialLinks}</p>
          <p><strong>Theme:</strong> {profile.themes}</p>
        </div>
      )}
    </div>
  );
}
