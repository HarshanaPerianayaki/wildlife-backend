const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');

// POST simulated data
router.post('/', async (req, res) => {
  try {
    const newEntry = new Animal(req.body);
    await newEntry.save();
    res.status(201).send("Data saved successfully");
  } catch (err) {
    res.status(500).send("Error saving data");
  }
});

// GET data by animal ID
router.get('/:id', async (req, res) => {
  try {
    const data = await Animal.find({ animalId: req.params.id });
    res.json(data);
  } catch (err) {
    res.status(500).send("Error fetching data");
  }
});

module.exports = router;
