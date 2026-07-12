require('dotenv').config();
const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const Recipe = require('./models/Recipe');
const Job = require('./models/Job');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

const seedBlogs = async () => {
  const blogs = [
    {
      title: "Ingri: Where Art Meets Gastronomy",
      excerpt: "The story of how a photography gallery and culinary passion came together to create a unique dining experience in the heart of the city.",
      date: "February 15, 2024",
      category: "behind the scenes",
      image: "Gastronomy.png",
      readTime: "5 min read",
      author: "INGRI Journal"
    },
    {
      title: "Mastering the Art of Plating",
      excerpt: "Transform your dishes into works of art with professional plating techniques and presentation tips from our culinary team.",
      date: "February 8, 2024",
      category: "culinary",
      image: "Pastry.png",
      readTime: "5 min read",
      author: "INGRI Journal"
    },
    {
      title: "The Architecture of a Wine Cellar",
      excerpt: "Delving into the subterranean history of the museum's wing and the curation of our vintage collection.",
      date: "January 5, 2024",
      category: "behind the scenes",
      image: "wine.png",
      readTime: "5 min read",
      author: "INGRI Journal"
    },
    {
      title: "Winter Solstice: A Gala Review",
      excerpt: "Highlights from our most recent black tie event celebrating the shortest day with the brightest flavors.",
      date: "December 28, 2023",
      category: "events",
      image: "gala.png",
      readTime: "5 min read",
      author: "INGRI Journal"
    },
    {
      title: "Farm to Table: Our Sustainable Sourcing Journey",
      excerpt: "Discover how we partner with local farms to bring the freshest, most sustainable ingredients to your plate.",
      date: "December 20, 2023",
      category: "sustainability",
      image: "farm.png",
      readTime: "5 min read",
      author: "INGRI Journal"
    },
    {
      title: "Heritage Grains: Rediscovering Ancient Flavors",
      excerpt: "Journey through time as we explore ancient grains and their place in modern cuisine, from spelt to einkorn.",
      date: "December 15, 2023",
      category: "chef's table",
      image: "heritage.png",
      readTime: "5 min read",
      author: "INGRI Journal"
    }
  ];

  await Blog.deleteMany();
  await Blog.insertMany(blogs);
  console.log('Blogs seeded successfully');
};

const seedRecipes = async () => {
  const recipes = [
    {
      title: "Homestyle Dal Tadka",
      image: "dal.webp",
      category: "Main Course",
      difficulty: "Easy",
      time: "30 mins",
      servings: 4,
      description: "A classic Indian lentil dish tempered with aromatic spices."
    },
    {
      title: "Spiced Potato Curry",
      image: "potato.webp",
      category: "Vegetarian",
      difficulty: "Medium",
      time: "45 mins",
      servings: 4,
      description: "Comfort food at its best with our signature spice blend."
    },
    {
      title: "Quick Vegetable Pulao",
      image: "pulao.webp",
      category: "Rice",
      difficulty: "Easy",
      time: "25 mins",
      servings: 2,
      description: "Fragrant rice dish with mixed vegetables and spices."
    },
    {
      title: "Butter Chicken",
      image: "chicken.jpg",
      category: "Main Course",
      difficulty: "Medium",
      time: "60 mins",
      servings: 6,
      description: "Rich creamy tomato curry with tender chicken."
    },
    {
      title: "Dal Makhni",
      image: "dalmakhni.webp",
      category: "Main Course",
      difficulty: "Medium",
      time: "60 mins",
      servings: 4,
      description: "Creamy slow-simmered lentils finished with butter and aromatic spices."
    },
    {
      title: "Paneer Tikka",
      image: "paneer.webp",
      category: "Starter",
      difficulty: "Medium",
      time: "40 mins",
      servings: 4,
      description: "Grilled cottage cheese marinated in aromatic spices."
    }
  ];

  await Recipe.deleteMany();
  await Recipe.insertMany(recipes);
  console.log('Recipes seeded successfully');
};

const seedJobs = async () => {
  const jobs = [
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Mumbai",
      type: "Full-time"
    },
    {
      title: "Quality Assurance Officer",
      department: "Operations",
      location: "Mumbai",
      type: "Full-time"
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Mumbai",
      type: "Full-time"
    },
    {
      title: "Social Media Intern",
      department: "Marketing",
      location: "Remote",
      type: "Internship"
    }
  ];

  await Job.deleteMany();
  await Job.insertMany(jobs);
  console.log('Jobs seeded successfully');
};

const seedDatabase = async () => {
  await connectDB();
  
  try {
    await seedBlogs();
    await seedRecipes();
    await seedJobs();
    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
