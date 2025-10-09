//db.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // ✅ Ensure env is loaded and passed to mongoose
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI not defined in .env file");
    }

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ MongoDB connected...");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
