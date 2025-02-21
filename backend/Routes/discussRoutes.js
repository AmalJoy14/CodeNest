import express from "express";
import mongoose from "mongoose";
import { authenticateToken } from "../Middlewares/authMiddleware.js";
import Post from "../models/posts.js";
import userModel from "../models/user.js";

const router = express.Router();

// Discuss Route
router.post("/createPost", authenticateToken ,async (req, res) => {
    try {
        const username = req.user.username;
        const user = await userModel.findOne({ username });
        const userId = user._id;
        const{ title, content } = req.body;
        console.log(userId);
    
        const newPost = new Post({
        userId,  
        title,
        content,
        likes: [],
        dislikes: [],  
        comments: [],  
        });
    
      await newPost.save();
      res.status(200).json({ message: "Post created successfully" });
    } catch (error) {
        console.error("Error creating post:", error);
        res.status(500).json({ message: "Post Failed", error: error.message });
    }
});


router.get("/getPosts", authenticateToken, async (req, res) => {
  try {
      const username = req.user.username;
      const user = await userModel.findOne({ username });
      const userId = user._id;

      const posts = await Post.find()
          .populate("userId", "username")
          .populate("comments.userId", "username")
          .lean();

      // Sort posts by upvotes (likes - dislikes) in descending order
      const sortedPosts = posts.sort((a, b) => {
          const aUpvotes = (a.likes?.length || 0) - (a.dislikes?.length || 0);
          const bUpvotes = (b.likes?.length || 0) - (b.dislikes?.length || 0);
          return bUpvotes - aUpvotes; 
      });

      res.status(200).json({ posts: sortedPosts, userId });
  } catch (error) {
      console.error("Error fetching posts:", error);
      res.status(500).json({ message: "Failed to fetch posts" });
  }
});


router.post('/:postId/like',authenticateToken , async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const username = req.user.username;
    const user = await userModel.findOne({ username });
    const userId = user._id.toString(); 

    // Remove dislike if exists
    post.dislikes = post.dislikes.filter(id => id.toString() !== userId);

    // Check if already liked
    if (post.likes.some(id => id.toString() === userId)) {
      post.likes = post.likes.filter(id => id.toString() !== userId); 
    } else {
      post.likes.push(user._id); 
    }
    

    await post.save();
    res.status(200).json("Post liked");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/:postId/dislike',authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const username = req.user.username;
    const user = await userModel.findOne({ username });
    const userId = user._id.toString();

    // Remove like if exists
    post.likes = post.likes.filter(id => id.toString() !== userId);

    // Check if already disliked
    if (post.dislikes.some(id => id.toString() === userId)) {
      post.dislikes = post.dislikes.filter(id => id.toString() !== userId); // Toggle off
    } else {
      post.dislikes.push(user._id); // Push the ObjectId directly
    }

    await post.save();
    res.status(200).json("Post disliked");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post('/:postId/comment', authenticateToken, async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    const username = req.user.username;
    const user = await userModel.findOne({ username });
    const userId = user._id.toString();

    const comment = {
      content: req.body.content,
      userId: userId,
    };

    post.comments.push(comment);
    await post.save();

    res.status(200).json("Comment added");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get('/:id/getImage', authenticateToken, async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    const imageUrl = user.image ? `http://localhost:3000/public/profiles/${user.image}` : null;
    res.status(200).json({ imageUrl });
  } catch (error) {
    res.status(500).json(error);
  }
});
  
export default router;