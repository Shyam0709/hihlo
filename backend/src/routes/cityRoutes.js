// routes/cityRoutes.js

import express from 'express';
import City from '../models/cities.js';

const router = express.Router();

// Create City
router.post('/create', async (req, res) => {
  try {
    const { name } = req.body;
    const newCity = new City({ name });
    await newCity.save();
    res.status(201).json(newCity);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all cities
router.get('/', async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
