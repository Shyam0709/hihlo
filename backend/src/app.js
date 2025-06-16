import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import profileRoutes from "./routes/profileRoutes.js";
import ads from "./routes/ads.js";
import qrRoutes from "./routes/qrRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/profile",profileRoutes ); 
app.use("/api/ads", ads);
app.use("/api/qr", qrRoutes);
app.use('/api/cities', cityRoutes);

export default app;
