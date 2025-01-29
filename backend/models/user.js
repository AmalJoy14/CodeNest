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
    easySolved: {
      type: Number,
      default: 0,
    },
    mediumSolved: {
      type: Number,
      default: 0,
    },
    hardSolved: {
      type: Number,
      default: 0,
    },
    leetcodeUsername: {
      value: {
        type: String,
        default: ""
      },
      toggle: {
        type: Number,
        default: 0
      }
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
    }
});


const user = mongoose.model("user",userSchema,"user"); //collection
export default user;