const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Import routes
const contactRoutes = require('./routes/contactRoutes');
const newsletterRoutes = require('./routes/newsletterRoutes');
const blogRoutes = require('./routes/blogRoutes');
const recipeRoutes = require('./routes/recipeRoutes');
const jobRoutes = require('./routes/jobRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/contact', contactRoutes);
app.use('/api/newsletter', newsletterRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/recipes', recipeRoutes);
app.use('/api/jobs', jobRoutes);

// Health check route
app.get('/', (req, res) => {
  res.json({ message: 'Ingri API is running' });
});

module.exports = app;
