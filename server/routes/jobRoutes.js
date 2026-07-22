const express = require("express");
const router = express.Router();

const verifyAdmin = require("../middleware/verifyAdmin");

const {
  getAllJobs,
  createJob,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

router.get("/", getAllJobs);

router.post("/", verifyAdmin, createJob);

router.put("/:id", verifyAdmin, updateJob);

router.delete("/:id", verifyAdmin, deleteJob);

module.exports = router;
