const express = require("express");
const User = require("../models/User");

const router = express.Router();

// GET /users → list all users (protected)
router.get("/", async (req, res) => {
  console.log("User Routes hit.");
  
  try {
    const users = await User.find().select("-password");
     console.log("Fetched users:", users); 
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error); 
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
