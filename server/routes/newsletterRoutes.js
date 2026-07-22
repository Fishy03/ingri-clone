const express = require("express");
const router = express.Router();

const verifyAdmin = require("../middleware/verifyAdmin");

const {
  subscribeNewsletter,
  getAllSubscribers,
  deleteSubscriber,
} = require("../controllers/newsletterController");

router.post("/", subscribeNewsletter);

router.get("/", verifyAdmin, getAllSubscribers);

router.delete("/:id", verifyAdmin, deleteSubscriber);

module.exports = router;
