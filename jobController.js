//job controller.js
const Job = require("../models/Job");

// Create job entry
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create({ ...req.body, user: req.user });
    res.json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Get jobs (with optional filter by status)
exports.getJobs = async (req, res) => {
  try {
    const { status } = req.query;
    let query = { user: req.user };
    if (status) query.status = status;

    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Update job
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, user: req.user },
      req.body,
      { new: true }
    );
    if (!job) return res.status(404).json({ msg: "Job not found" });
    res.json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Delete job
exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({ _id: req.params.id, user: req.user });
    if (!job) return res.status(404).json({ msg: "Job not found" });
    res.json({ msg: "Job deleted" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
