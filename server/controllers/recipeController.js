// const Recipe = require('../models/Recipe');

// const getAllRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.find();
//     res.status(200).json({
//       success: true,
//       data: recipes
//     });
//   } catch (error) {
//     console.error('Fetch recipes error:', error);
//     res.status(500).json({
//       success: false,
//       message: 'Server error. Please try again later.'
//     });
//   }
// };

// module.exports = { getAllRecipes };

const Recipe = require("../models/Recipe");

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();

    res.json({
      success: true,
      data: recipes,
    });
  } catch (error) {
    console.error("FULL ERROR:", error);
    console.error("STACK:", error.stack);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createRecipe = async (req, res) => {
  try {
    const { title, description, category, difficulty, time, servings } =
      req.body;

    const recipe = await Recipe.create({
      title,
      description,
      category,
      difficulty,
      time,
      servings,
      image: req.file ? req.file.filename : "",
    });

    res.status(201).json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    console.error("Create recipe error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

const updateRecipe = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      description: req.body.description,
      category: req.body.category,
      difficulty: req.body.difficulty,
      time: req.body.time,
      servings: req.body.servings,
    };

    if (req.file) {
      updateData.image = req.file.filename;
    }

    const recipe = await Recipe.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    res.json({
      success: true,
      data: recipe,
    });
  } catch (error) {
    console.error("Update recipe error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await Recipe.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Recipe deleted successfully",
    });
  } catch (error) {
    console.error("Delete recipe error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

module.exports = {
  getAllRecipes,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
