import express from "express";
import { submitCodeToJudge0 } from "../services/judge0Service.js";
import testCases from "../data/testCases.js";
import { authenticateToken } from "../Middlewares/authMiddleware.js";
import User from "../models/user.js";
import Problem from "../models/problem.js";



const router = express.Router();

router.post("/run",authenticateToken, async (req, res) => {
  try {
    const { sourceCode, language , problemId} = req.body;

    const result = await submitCodeToJudge0(sourceCode, language , problemId);

    if (!result) {
      return res.status(500).json({ error: "Failed to execute code on Judge0" });
    }

    const mergedResults = result.submissions.map((submission, index) => ({
      ...submission,
      testCase: testCases[problemId][index] 
    }));
    
    res.json(mergedResults );

  } catch (error) {
    console.error("Error in Judge0 route:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.post("/submit",authenticateToken, async (req, res) => {
  try {
      const { problemId , topicId } = req.body; 
      const username = req.user.username; 

      const problem = await Problem.findOne({ title: problemId });
      if (!problem) return res.status(404).json({ error: "Problem not found" });


      await User.updateOne(
          { username , "solvedProblems.title": { $ne: problem.title } },
          { $addToSet: { solvedProblems: { problemId: problem._id, title: problem.title,topic : topicId , difficulty: problem.difficulty } } }
      );

      res.status(200).json({ success: true, message: "Problem added to solved list" });
  } catch (error) {
      res.status(500).json({ error: "Failed to update solved problems" });
  }
});

router.get("/isSolved/:problemId",authenticateToken, async (req, res) => {
  try {
    const { problemId } = req.params;
    const user = await User.findOne({ username: req.user.username, "solvedProblems.title": problemId });

    res.json({ solved: !!user });
  } catch (error) {
    res.status(500).json({ error: "Failed to check problem status" });
  }
});


export default router;
