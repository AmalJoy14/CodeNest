import express from "express";
import userModel from "../models/user.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";
import upload from "../utils/multerConfig.js";
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000";

const router = express.Router();

router.post('/profileupload', authenticateToken, upload.single("image"), async (req, res, next) => {
    const username = req.user.username;
    const userDetails = await userModel.findOne({ username });
    userDetails.image = req.file.filename;
    await userDetails.save();
    res.status(200).json({ message: "Profile image uploaded successfully" });
});

router.get("/profileData", authenticateToken, async (req, res) => {
    const username = req.user.username;
    const userDetails = await userModel.findOne({ username });
    const contestRating = userDetails.easySolved * 3 + userDetails.mediumSolved * 5 + userDetails.hardSolved * 8;
    const easySolved = userDetails.easySolved;
    const mediumSolved = userDetails.mediumSolved;
    const hardSolved = userDetails.hardSolved;
    const totalSolved = easySolved + mediumSolved + hardSolved;

    //Format the date

    const formattedDate = new Date(userDetails.createdAt).toLocaleDateString("en-GB", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    //Find the rank of the user
    const users = await userModel.find().sort({ 
        contestRating: -1,
    });
    const rank = users.findIndex(user => user.username === username) + 1;

    const imageUrl = userDetails.image ? `${BACKEND_URL}/public/profiles/${userDetails.image}` : null;
    res.status(200).json({imageUrl, username : userDetails.username, fullname : userDetails.fullname , contestRating, totalSolved ,easySolved , mediumSolved , hardSolved, createdAt : formattedDate , rank});
});

export default router;