import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required:true
      },
});


const user = mongoose.model("user",userSchema,"user"); //collection
export default user;