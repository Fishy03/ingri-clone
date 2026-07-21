const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const verifyAdmin = require("../middleware/verifyAdmin");

const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.get("/", getAllBlogs);
router.get("/:id", getBlogById);

router.post("/", verifyAdmin, upload.single("image"), createBlog);

router.put("/:id", verifyAdmin, upload.single("image"), updateBlog);

router.delete("/:id", verifyAdmin, deleteBlog);

module.exports = router;
