// server/routes/profiles.js

import express from 'express';
import Profile from '../models/Profile.js';

const router = express.Router();

// POST /api/profiles
router.post('/profiles', async (req, res) => {
  try {
    const profile = new Profile(req.body);
    await profile.save();
    res.status(201).json({ message: 'Profile saved!', profile });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// ✅ GET /api/profiles
router.get('/profiles', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch profiles' });
  }
});

export default router;
