// job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  company: { type: String, required: true },
  position: { type: String, required: true },
  status: { 
    type: String, 
    enum: ["Applied", "Interview", "Offered", "Rejected"], 
    default: "Applied" 
  },
  dateApplied: { type: Date, default: Date.now },
  notes: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }  // links job to user
});

module.exports = mongoose.model("Job", jobSchema);
