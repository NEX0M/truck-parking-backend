const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/parkings", require("./routes/parkingRoutes"));

// Define the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
