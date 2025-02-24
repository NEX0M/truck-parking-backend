const express = require("express");
const Parking = require("../models/Parking");
const router = express.Router();

// Get All Parking Spots
router.get("/", async (req, res) => {
  try {
    const parkings = await Parking.find(); // Fetch all parking spots
    res.json(parkings); // Send the data as JSON
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

// Add a New Parking Spot
router.post("/", async (req, res) => {
  try {
    const { name, coordinates, is24h, price } = req.body;
    
    // Create a new parking spot
    const newParking = new Parking({
      name,
      location: { type: "Point", coordinates },
      is24h,
      price,
    });
    
    // Save it to the database
    await newParking.save();
    res.status(201).json(newParking); // Return the newly created parking spot
  } catch (error) {
    res.status(400).json({ error: "Invalid data" });
  }
});
module.exports = router;