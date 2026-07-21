const Blog = require("../models/Blog");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.error("Fetch blogs error:", error);
    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// GET single blog
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const createBlog = async (req, res) => {
  try {
    const { title, excerpt, content, category, readTime, author } = req.body;

    const image = req.file ? req.file.filename : "";

    console.log(req.file);

    const blog = await Blog.create({
      title,
      excerpt,
      content,
      category,
      image,
      readTime: readTime || "5 min read",
      author: author || "INGRI Journal",
    });

    res.status(201).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    console.error("Create blog error:", error);

    res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

// UPDATE blog
const updateBlog = async (req, res) => {
  try {
    const updateData = {
      title: req.body.title,
      excerpt: req.body.excerpt,
      content: req.body.content,
      category: req.body.category,
      readTime: req.body.readTime || "5 min read",
      author: req.body.author || "INGRI Journal",
    };

    // Only update image if a new one was uploaded
    if (req.file) {
      updateData.image = req.file.filename;
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
    });

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE blog
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({
        success: false,
        message: "Blog not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
};
