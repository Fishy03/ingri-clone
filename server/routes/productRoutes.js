const upload = require("../middleware/upload");
const express = require("express");
const router = express.Router();
const verifyAdmin = require("../middleware/verifyAdmin");

const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);

router.post("/", verifyAdmin, upload.single("image"), createProduct);

router.put("/:id", verifyAdmin, upload.single("image"), updateProduct);

router.delete("/:id", verifyAdmin, deleteProduct);

module.exports = router;
