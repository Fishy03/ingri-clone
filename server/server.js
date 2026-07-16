// const dns = require("dns");

// dns.setServers(["8.8.8.8", "1.1.1.1"]);

// require("dotenv").config();
// const app = require("./app");

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

require("dotenv").config();

const express = require("express");
const dns = require("dns");
const path = require("path");

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = require("./app");
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

start();
