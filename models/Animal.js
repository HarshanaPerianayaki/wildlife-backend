const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
  animalId: String,
  latitude: Number,
  longitude: Number,
  temperature: Number,
  humidity: Number,
  motionDetected: Boolean,
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Animal', animalSchema);
