const Blog = require('../models/Blog');

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({ 
      success: true, 
      data: blogs 
    });
  } catch (error) {
    console.error('Fetch blogs error:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    });
  }
};

module.exports = { getAllBlogs };
