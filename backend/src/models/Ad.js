import mongoose from "mongoose";
const adSchema = new mongoose.Schema({
  title: String,
  content: String,
  city: { type: mongoose.Schema.Types.ObjectId, ref: "City" },
  // add other fields if needed
});
export default mongoose.model("Ad", adSchema);