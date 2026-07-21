const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const verifyAdmin = require("../middleware/verifyAdmin");

const {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");

router.get("/", getAllRecipes);

router.post("/", verifyAdmin, upload.single("image"), createRecipe);

router.put("/:id", verifyAdmin, upload.single("image"), updateRecipe);

router.delete("/:id", verifyAdmin, deleteRecipe);

module.exports = router;
