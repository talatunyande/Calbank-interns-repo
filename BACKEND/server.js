const express = require("express");
const sequelize = require("./config/database"); // adjust path if your database file is elsewhere
require("dotenv").config();
const User = require("./Models/user");
const trivia_Category = require("./Models/trivia_category");
const trivia_Question = require("./Models/trivia_question");
const trivia_Answers = require("./Models/trivia_Answers");
const UserProgress = require("./Models/User_progress"); 
const Milestone = require ("./Models/milestone");
const Leaderboard = require ("./Models/leaderboard");

const app = express();

// Test route
app.get("/", (req, res) => {
  res.send("Hello, MySQL + Express is working!");
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

(async () => {
  try {
    await sequelize.sync({ alter: true }); 
    console.log("All tables synced successfully!");
  } catch (err) {
    console.error("Error syncing tables:", err);
  }
})();


