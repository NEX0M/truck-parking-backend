const mongoose = require("mongoose");

const ParkingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: {
    type: { type: String, enum: ["Point"], default: "Point" },
    coordinates: { type: [Number], required: true },
  },
  is24h: { type: Boolean, default: false },
  price: { type: Number, default: 0 },
});

ParkingSchema.index({ location: "2dsphere" }); // Enables geospatial queries

module.exports = mongoose.model("Parking", ParkingSchema);
