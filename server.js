// Load env Variables

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authMiddleware = require("./middleware/authMiddleware");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const admin = true;

const PORT = process.env.PORT || 8000;

const app = express();

app.use(cors());
app.use(express.json());


// 🔹 MongoDB connection (YAHAN)
mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("MongoDB Connected Successfully"))
.catch(err => console.log("MongoDB Connection Error:", err));


// Routes
app.use("/users", userRoutes);

app.use("/auth",authRoutes);

app.get("/profile",authMiddleware,(req,res)=>{
    res.send(`Welcome ${req.user.name}!`);
});

// Admin Middleware
function adminOnly(req, res, next) {
    if (req.user.role !== "admin") {
        return res.status(403).send("Access denied. Admins only!");
    }
    next();
}
// Admin route
app.get("/admin",authMiddleware,adminOnly,(req,res)=>{
    res.send("Welcome to the Dashboard!");
});

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});