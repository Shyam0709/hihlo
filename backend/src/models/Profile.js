// server/models/Profile.js

import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  name: String,
  about: String,
  photos: String,
  contact: String,
  location: String,
  services: String,
  socialLinks: String,
  themes: String,
});

export default mongoose.model('Profile', profileSchema);
