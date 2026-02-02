const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();
const SECRET_KEY = process.env.SECRET_KEY;

// REGISTER
router.post("/register", async (req, res) => {
    const {name,email,password,role} = req.body;

    // All fields required validation
    if(!name || !email || !password || !role){
      return res.status(400).send("All fields are required.");
    }

    // ✅ Only allow admin role
  if (role !== "admin") {
    return res.status(403).send("Only admin can register!");
  }

    const existingUser = await User.findOne({ name });
    if (existingUser) {
        return res.send("User already exists!");
    }


    const hash = await bcrypt.hash(password, 10);

   const user = await User.create({name, email, password: hash, role});

    res.send(`${user.name} registerd successfully as Admin`);
});

// LOGIN
router.post("/login", async (req, res) => {
    const {email, password} = req.body;

 // All fields required 
    if( !email || !password){
      return res.status(400).json({message:"Email and Password are required."});
    }

    const user = await User.findOne({email});
    if (!user) return res.status(400).json({message:"Admin not found!"});

      // 🔒 Admin only
    if (user.role !== "admin") {
        return res.status(403).json({message:"Access denied!"});
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.send("Wrong password.");

    const token = jwt.sign(
        {name: user.name, email: user.email, role: user.role },
        SECRET_KEY,{expiresIn:"2h"}
    );

    res.json({token});
});

module.exports = router;


