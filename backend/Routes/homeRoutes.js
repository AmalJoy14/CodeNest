import express from "express"
import userModel from "../models/user.js";

const router = express.Router();

router.get("/homeData", async (req, res) => {
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

export default router