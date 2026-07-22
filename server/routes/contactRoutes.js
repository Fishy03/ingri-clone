const express = require("express");
const router = express.Router();

const verifyAdmin = require("../middleware/verifyAdmin");

const {
  submitContact,
  getAllContacts,
  deleteContact,
} = require("../controllers/contactController");

router.post("/", submitContact);

router.get("/", verifyAdmin, getAllContacts);

router.delete("/:id", verifyAdmin, deleteContact);

module.exports = router;
