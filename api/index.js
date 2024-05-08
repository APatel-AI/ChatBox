import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import User from "./models/User.js";
import jwt from "jsonwebtoken";
import cors from "cors";
import e from "express";
mongoose.connect(process.env.MONGO_URL);
console.log(process.env.MONGO_URL);

const jwtSecret = process.env.JWT_SECRET;
const app = express();
app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);

app.get("/test", (req, res) => {
  res.json("test ok");
});

// app.post("/register", async (req, res) => {
//   const { username, password } = req.body;
//   try {
//     const createdUser = await User.create({ username, password });
//     const token = jwt.sign({ userId: createdUser._id }, jwtSecret);
//     res.cookie("token", token).status(201).json({ message: "Registration successful" });
//   } catch (err) {
//     console.error("Error during registration:", err);
//     res.status(500).json({ error: "Registration failed" });
//   }
// });

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const createdUser = await User.create({ username, password });
    const token = jwt.sign({ userId: createdUser._id }, jwtSecret);
    res.cookie("token", token).status(201).json({
      message: "Registration successful",
      id: createdUser._id
    });
  } catch (err) {
    console.error("Error during registration:", err);
    res.status(500).json({ error: "Registration failed" });
  }
});



app.listen(4040);