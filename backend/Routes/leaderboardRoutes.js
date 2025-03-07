import express from "express";
import axios from "axios";
import userModel from "../models/user.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";

const router = express.Router();

// CodeNest Leaderboard
router.get("/codenest", authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const users = await userModel.find();

        const leaderboard = users.map(user => ({
            platformUsername : user.username,
            fullname: user.fullname,
            imageUrl: user.image ? `http://localhost:3000/public/profiles/${user.image}` : null,
            contestRating: user.easySolved * 3 + user.mediumSolved * 5 + user.hardSolved * 8,
            totalSolved: user.easySolved + user.mediumSolved + user.hardSolved,
            highlight: user.username === username
        }));

        res.status(200).json(leaderboard);
    } catch (error) {
        console.error("Error fetching leaderboard data:", error);
        res.status(500).json({ message: "Server error" });
    }
});


// Leetcode Leaderboard
router.get('/leetcode',authenticateToken, async (req, res) => {
    
    try {
        const username = req.user.username;
        const leetcodeUsers = await userModel.find({ leetcodeUsername: { $ne: "" } }, { _id: 0, username: 1, fullname: 1, leetcodeUsername: 1 , image: 1});
        const leetcodeUsername = await userModel.findOne({ username: { $eq: username } }, { _id: 0, leetcodeUsername: 1 });

        const leaderboardData = await Promise.all(leetcodeUsers.map(async (user) => {
            
            let ratingData = 0;
            try {
                const response = await axios.get(`https://coderme.vercel.app/leetcode/${user.leetcodeUsername}`);
                ratingData = response.data.rating;
            } catch (error) {
                ratingData = 0;
            }
            const problemsSolvedData = await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${user.leetcodeUsername}`);

            const rating = ratingData;
            const totalSolved = problemsSolvedData.data.totalSolved;

            return {
                username: user.username,
                platformUsername: user.leetcodeUsername,
                imageUrl : user.image ? `http://localhost:3000/public/profiles/${user.image}` : null,
                fullname: user.fullname,
                contestRating: rating || 0,
                totalSolved: totalSolved || 0,
                highlight: user.leetcodeUsername === leetcodeUsername.leetcodeUsername
            };
        }));

        res.status(200).json(leaderboardData);
    } catch (error) {
        console.error("Error fetching leaderboard data:", error);
    }
});


// Codeforces Leaderboard
router.get('/codeforces',authenticateToken, async (req, res) => {
    try{
        const username = req.user.username;
        const codeforcesUsers = await userModel.find({ codeforcesUsername: { $ne: "" } }, { _id: 0,username : 1, fullname : 1, codeforcesUsername: 1 , image: 1});
        const codeforcesUsername = await userModel.findOne({ username: { $eq: username } }, { _id: 0, codeforcesUsername: 1 });
        
        // Create a single API request with all usernames joined by semicolon
        const handles = codeforcesUsers.map(user => user.codeforcesUsername).join(";");
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handles}`);


        const leaderboardData = response.data.result.map((userData, index) => ({
            username: codeforcesUsers[index].username, 
            platformUsername: userData.handle,
            fullname: codeforcesUsers[index].fullname,
            imageUrl : codeforcesUsers[index].image ? `http://localhost:3000/public/profiles/${codeforcesUsers[index].image}` : null,
            contestRating: userData.rating || 0,
            totalSolved: userData.contribution || 0,
            highlight: userData.handle === codeforcesUsername.codeforcesUsername
        }));

        res.status(200).json(leaderboardData);
    }
    catch(error){
        console.error("Error fetching leaderboard data:", error);
    }
});

export default router;
