import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    password: {
        type: String,
        required:true
    },
    leetcodeUsername: {
      type: String,
      default: ""
    },   
    codeforcesUsername: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    lastSignIn: {
      type: Date,
      default: Date.now,
    },
    image: {
      type: String,
      default: null,
    },
    solvedProblems: [
      {
        problemId: { 
          type: mongoose.Schema.Types.ObjectId, 
          ref: "Problem" 
        },
        title:{
          type: String,
          required: true,
        },
        topic:{
          type: String,
          required: true,
        },
        difficulty: { 
          type: String, 
          enum: ["Easy", "Medium", "Hard"] 
        }
      },
    ]
});


userSchema.virtual("easySolved").get(function () {
  return this.solvedProblems.filter(p => p.difficulty === "Easy").length;
});

userSchema.virtual("mediumSolved").get(function () {
  return this.solvedProblems.filter(p => p.difficulty === "Medium").length;
});

userSchema.virtual("hardSolved").get(function () {
  return this.solvedProblems.filter(p => p.difficulty === "Hard").length;
});

userSchema.set("toJSON", { virtuals: true });
userSchema.set("toObject", { virtuals: true });


const user = mongoose.model("user",userSchema,"user"); //collection
export default user;