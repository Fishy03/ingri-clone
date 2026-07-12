const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  excerpt: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  readTime: {
    type: String,
    default: '5 min read'
  },
  author: {
    type: String,
    default: 'INGRI Journal'
  }
});

module.exports = mongoose.model('Blog', blogSchema);
