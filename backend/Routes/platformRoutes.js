import express from "express";
import userModel from "../models/user.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";

const router = express.Router();

// For adding username
router.post('/addUsername',authenticateToken, async(req, res) =>{
    const {platformUsername , platform} = req.body;
    const username = req.user.username;

    let user = await userModel.findOne({username: username});

    switch (platform) {
        case 'LeetCode':
            user.leetcodeUsername = platformUsername;
            break;
        case 'Codeforces':
            user.codeforcesUsername = platformUsername;
            break;
    }

    await user.save();
    
    res.status(200).json({ message: `${platform} username added successfully` });
});

// For retrieveing Username
router.get('/getUsername', authenticateToken, async (req, res) => {
    const { platform } = req.query; 
    const username = req.user.username; 

    let user = await userModel.findOne({ username });

    let platformData;
    switch (platform) {
        case 'LeetCode':
            platformData = user.leetcodeUsername;
            break;
        case 'Codeforces':
            platformData = user.codeforcesUsername;
            break;
    }

    res.status(200).json({username: platformData });
});

export default router;