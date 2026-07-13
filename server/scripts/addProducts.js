const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
require("dotenv").config();
console.log(process.env.MONGODB_URI);
const mongoose = require("mongoose");

const Product = require("../models/Product");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Connected");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

const products = [
  {
    name: "Almond Biscotti",
    description: "Crunchy Italian almond biscuits.",
    category: "Snacks",
    price: 399,
    image: "almond biscotti.png",
    featured: true,
    stock: 50,
  },
  {
    name: "Choco Chip Cookies",
    description: "Classic chocolate chip cookies.",
    category: "Snacks",
    price: 299,
    image: "choco chip cookies.png",
    featured: true,
    stock: 50,
  },
  {
    name: "Fresh Chilli Pickle",
    description: "Traditional fresh chilli pickle.",
    category: "Pickles",
    price: 159,
    image: "fresh chilli pickle.png",
    featured: true,
    stock: 50,
  },
  {
    name: "Almond Makhana Granola",
    description: "Healthy roasted makhana granola.",
    category: "Snacks",
    price: 239,
    image: "almond makhana granola.png",
    featured: false,
    stock: 50,
  },
  {
    name: "Super Nut Butter",
    description: "Premium mixed nut butter.",
    category: "Snacks",
    price: 119,
    image: "super nut butter.png",
    featured: false,
    stock: 50,
  },
];

const addProducts = async () => {
  try {
    await connectDB();

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("Products Added Successfully");

    process.exit();
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};

addProducts();
