const Recipe = require('../models/Recipe');

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json({ 
      success: true, 
      data: recipes 
    });
  } catch (error) {
    console.error('Fetch recipes error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

module.exports = { getAllRecipes };
