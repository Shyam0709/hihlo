import express from "express";
import QR from "../models/qrModel.js";

const router = express.Router();

// CREATE QR / Flyer
router.post("/create", async (req, res) => {
  try {
    const { title, content } = req.body;
    const newQR = new QR({ title, content });
    await newQR.save();
    res.status(201).json({ message: "QR / Flyer created successfully", qr: newQR });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating QR / Flyer" });
  }
});

// GET ALL QR / Flyers
router.get("/", async (req, res) => {
  try {
    const allQRs = await QR.find().sort({ createdAt: -1 });
    res.json(allQRs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching QR / Flyers" });
  }
});

export default router;
