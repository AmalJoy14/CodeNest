import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from './models/user.js';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const connectDB =async ()=> {
    try{
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected : ${conn.connection.host}`);
    }
    catch(error){
        console.log(error);
    }
}

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


app.post('/api/signup',async(req, res) => {
    const { fullname, username, password } = req.body;
    let user = await userModel.findOne({username: username});
    if(user) return res.status(409).json({ message: "User already exists" });

    bcrypt.genSalt(10, (err,salt) =>{
        bcrypt.hash(password, salt, async(err,hash) =>{
            let createdUser = await userModel.create({
                fullname,
                username,
                password: hash
            })
            
            let token = jwt.sign({username} , process.env.ACCESS_TOKEN_SECRET);
            res.cookie("token", token);
            res.status(200).json({ message: "User registered successfully" });
        })
    });
});

app.post('/api/signin', async(req, res) =>{
    let user = await userModel.findOne({username: req.body.username});
    if(!user) return res.status(404).json({ message: "Username or password is incorrect!" });

    user.lastSignIn = new Date();
    await user.save();

    bcrypt.compare(req.body.password, user.password, (err, result) =>{
        if(!result) return res.status(404).json({ message: "Username or password is incorrect!" });

        let token = jwt.sign({username: user.username} , process.env.ACCESS_TOKEN_SECRET);
        res.cookie("token", token);
        res.status(200).json({ message: "User signed in successfully" });
    });
});

app.get("/api/homeData", async (req, res) => {
    try {
        const userCount = await userModel.countDocuments();

        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        const activeUserCount = await userModel.countDocuments({ lastSignIn: { $gte: sixMonthsAgo } });

        const totalProblemsSolved = await userModel.aggregate([ { $group: { _id: null, total: { $sum: { $add: ["$easySolved", "$mediumSolved", "$hardSolved"] } } } } ]);
        
        const problemsSolved = totalProblemsSolved.length > 0 ? totalProblemsSolved[0].total : 0;

        res.status(200).json({ userCount, activeUserCount , problemsSolved }); 
    }
    catch (error) {
        console.error("Error fetching user count:", error);
    }
});

app.post('/platform/addUsername',authenticateToken, async(req, res) =>{
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

app.get('/platform/getUsername', authenticateToken, async (req, res) => {
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

app.get('/leaderboard/codenest',authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const leaderboardData = await userModel.find({}, { _id: 0, username: 1, fullname: 1, easySolved: 1, mediumSolved: 1 , hardSolved: 1 });

        const codenestData = leaderboardData.map(user => {
            const highlight = user.username === username;
            const totalSolved = user.easySolved + user.mediumSolved + user.hardSolved;
            const contestRating = (user.easySolved * 3) + (user.mediumSolved * 5) + (user.hardSolved * 8);
            return { username: user.username,platformUsername : user.username, fullname: user.fullname, contestRating , totalSolved , highlight };
        });
        res.status(200).json(codenestData);
    } catch (error) {
        console.error("Error fetching leaderboard data:", error);
    }
});

app.get('/leaderboard/leetcode',authenticateToken, async (req, res) => {
    
    try {
        const username = req.user.username;
        const leetcodeUsers = await userModel.find({ leetcodeUsername: { $ne: "" } }, { _id: 0, username: 1, fullname: 1, leetcodeUsername: 1 });
        const leetcodeUsername = await userModel.findOne({ username: { $eq: username } }, { _id: 0, leetcodeUsername: 1 });

        const leaderboardData = await Promise.all(leetcodeUsers.map(async (user) => {
            const ratingData = await axios.get(`https://coderme.vercel.app/leetcode/${user.leetcodeUsername}`);
            const problemsSolvedData = await axios.get(`https://leetcode-api-faisalshohag.vercel.app/${user.leetcodeUsername}`);

            const rating = ratingData.data.rating;
            const totalSolved = problemsSolvedData.data.totalSolved;

            return {
                username: user.username,
                platformUsername: user.leetcodeUsername,
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


app.get('/leaderboard/codeforces',authenticateToken, async (req, res) => {
    try{
        const username = req.user.username;
        const codeforcesUsers = await userModel.find({ codeforcesUsername: { $ne: "" } }, { _id: 0,username : 1, fullname : 1, codeforcesUsername: 1 });
        const codeforcesUsername = await userModel.findOne({ username: { $eq: username } }, { _id: 0, codeforcesUsername: 1 });
        
        // Create a single API request with all usernames joined by semicolon
        const handles = codeforcesUsers.map(user => user.codeforcesUsername).join(";");
        const response = await axios.get(`https://codeforces.com/api/user.info?handles=${handles}`);


        const leaderboardData = response.data.result.map((userData, index) => ({
            username: codeforcesUsers[index].username, 
            platformUsername: userData.handle,
            fullname: codeforcesUsers[index].fullname,
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

app.get('/logout' ,(req,res) =>{
    res.cookie("token", "");
    res.status(200).json({ message: "User logged out successfully" });
});

app.get('/authenticate', authenticateToken, (req, res) =>{
    res.status(200).json({ message: "Welcome to home page" });
});

function authenticateToken(req, res, next){
    const token = req.cookies['token'];
    if(!token) return res.status(401).json({ message: "Unauthorized" });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) =>{
        if(err) return res.status(403).json({ message: "Forbidden" });
        req.user = user;
        next();
    });
}

connectDB().then(() =>{
    app.listen(PORT, () => {
        console.log(`Listening to port ${PORT}`);
    })
});