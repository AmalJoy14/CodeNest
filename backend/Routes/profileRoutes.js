import express from "express";
import userModel from "../models/user.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";
import upload from "../utils/multerConfig.js";

const router = express.Router();

router.post('/profileupload', authenticateToken, upload.single("image"), async (req, res, next) => {
    const username = req.user.username;
    const userDetails = await userModel.findOne({ username });
    userDetails.image = req.file.filename;
    await userDetails.save();
    res.status(200).json({ message: "Profile image uploaded successfully" });
});

export default router;