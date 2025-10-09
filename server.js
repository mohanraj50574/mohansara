// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

// ✅ Load env vars first
dotenv.config();

const app = express();

// ✅ Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));

// Server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
