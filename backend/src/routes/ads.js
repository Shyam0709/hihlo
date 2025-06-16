// routes/ads.js
import express from "express";
import Ad from "../models/Ad.js";

const router = express.Router();

// POST /ads (admin)
// POST /ads/create
router.post("/create", async (req, res) => {
  const { title, content, city } = req.body;
  const ad = new Ad({ title, content, city });
  await ad.save();
  res.status(201).json(ad);
});


// GET /ads (everyone)
router.get("/", async (req, res) => {
  const ads = await Ad.find();
  res.json(ads);
});

export default router;
