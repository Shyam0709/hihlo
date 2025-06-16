import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react";
import API from "../api";

export default function CreateQRPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();
  const qrRef = useRef();

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      // Optional: Save to backend if needed
      await API.post("/qr/create", { title, content });

      alert("QR / Flyer created and saved!");
      navigate("/dashboard/supportstaff");
    } catch (err) {
      console.error(err);
      alert("Error creating QR / Flyer");
    }
  };

  const downloadQRCode = () => {
    const canvas = qrRef.current.querySelector("canvas");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = `${title || "qr_code"}.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-950 to-green-800 flex items-center justify-center p-8">
      <div className="bg-slate-900 border border-slate-700 rounded-lg p-10 w-full max-w-xl text-white">
        <h1 className="text-3xl font-bold mb-6 text-center">Create QR / Flyer</h1>

        <form onSubmit={handleCreate} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm">Title</label>
            <input
              type="text"
              placeholder="QR/Flyer title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm">Content (text or URL)</label>
            <textarea
              placeholder="Content for the QR code"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-green-500"
              rows={3}
              required
            />
          </div>

          {/* Live QR preview */}
          {content && (
            <div className="text-center my-6">
              <div ref={qrRef} className="inline-block p-4 bg-white rounded-lg">
                <QRCodeCanvas value={content} size={200} />
              </div>
              <button
                type="button"
                onClick={downloadQRCode}
                className="mt-4 bg-green-600 hover:bg-green-700 px-5 py-2 rounded text-white transition"
              >
                Download QR Code
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg text-lg shadow-md transition duration-200"
          >
            Save & Create
          </button>
        </form>
      </div>
    </div>
  );
}
