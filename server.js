const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Default route (optional, for testing)
app.get("/", (req, res) => {
  res.send("🚀 Truck Parking Backend is Running!");
});

// Use routes
app.use("/api/parkings", require("./routes/parkingRoutes"));

// Ensure the app uses Render's assigned PORT dynamically
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));