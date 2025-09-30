const express = require("express");
const sequelize = require("./config/database"); // adjust path if your database file is elsewhere
require("dotenv").config();


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


