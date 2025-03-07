import express from "express";
import User from "../models/user.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";

const router = express.Router();

router.get("/solved",authenticateToken, async (req, res) => {
    try {
      const user = await User.findOne({ username: req.user.username });
      res.json({ solvedProblems: user.solvedProblems.map(p => p.title) });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch solved problems" });
    }
});

router.get("/countSolved", authenticateToken, async (req, res) => {
    try {
      const username = req.user.username;
      const user = await User.findOne({ username }, "solvedProblems").lean();
  
      res.json(user.solvedProblems); 
    } catch (error) {
      res.status(500).json({ message: "Server error" });
    }
  });

export default router;