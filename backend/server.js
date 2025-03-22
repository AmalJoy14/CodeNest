import express from 'express';
import connectDB from "./utils/db.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import { authenticateToken } from "./Middlewares/authMiddleware.js";
import authRoutes from "./Routes/authRoutes.js";
import homeRoutes from "./Routes/homeRoutes.js"
import leaderboardRoutes from "./Routes/leaderboardRoutes.js";
import platformRoutes from "./Routes/platformRoutes.js";
import profileRoutes from "./Routes/profileRoutes.js";
import discussRoutes from "./Routes/discussRoutes.js";
import judge0Routes from "./Routes/judge0Routes.js";
import problemsRoutes from "./Routes/problemsRoutes.js"
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";

import userModel from "./models/user.js";
dotenv.config();


const app = express();
const PORT = 3000;
const corsOptions = {
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
};


app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", authRoutes);
app.use("/leaderboard", leaderboardRoutes);
app.use("/platform",platformRoutes);
app.use("/home",homeRoutes);
app.use("/profile", profileRoutes);
app.use("/discuss",discussRoutes);
app.use("/public", express.static("public"));
app.use("/judge0", judge0Routes);
app.use("/problems", problemsRoutes);

app.get('/profileImage', authenticateToken,async (req, res) => {
    const username = req.user.username;
    const userDetails = await userModel.findOne({ username });
    const imageUrl = userDetails.image ? `${BACKEND_URL}/public/profiles/${userDetails.image}` : null;
    res.status(200).json({ imageUrl , username});
});

app.get('/authenticate', authenticateToken, (req, res) =>{
    res.status(200).json({ message: "Welcome to home page" });
});


connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    })
});