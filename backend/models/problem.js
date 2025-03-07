import mongoose from "mongoose";

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    difficulty: { 
        type: String, 
        enum: ["Easy", "Medium", "Hard"], 
        required: true 
    },
});

const problems = mongoose.model("problems",problemSchema,"problems"); //collection
export default problems;