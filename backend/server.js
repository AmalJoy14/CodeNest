import express from 'express';
import connectDB from "./utils/db.js";
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userModel from './models/user.js';
import dotenv from 'dotenv';
import { authenticateToken } from "./Middlewares/authMiddleware.js";
import authRoutes from "./Routes/authRoutes.js";
import homeRoutes from "./Routes/homeRoutes.js"
import leaderboardRoutes from "./Routes/leaderboardRoutes.js";
import platformRoutes from "./Routes/platformRoutes.js";
import profileRoutes from "./Routes/profileRoutes.js";
import upload from "./utils/multerConfig.js";
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



app.get('/authenticate', authenticateToken, (req, res) =>{
    res.status(200).json({ message: "Welcome to home page" });
});


connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    })
});