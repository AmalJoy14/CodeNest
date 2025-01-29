import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema(
    {
        username: {
            type: mongoose.Schema.Types.String,
            ref: "user",
            required: true,
            unique: true,
        },
        leetcode: {
            leetcodeUsername: { type: String }, 
            totalProblemsSolved: { type: Number, default: 0 },
            easySolved: { type: Number, default: 0 },
            mediumSolved: { type: Number, default: 0 },
            hardSolved: { type: Number, default: 0 },
            contestRating: { type: Number, default: 0 },
            contestsParticipated: { type: Number, default: 0 },
        },
        codeforces: {
            codeforcesUsername: { type: String }, 
            currentRating: { type: Number, default: 0 },
            maxRating: { type: Number, default: 0 },
            contestsParticipated: { type: Number, default: 0 },
        },
        codenest: {
            points: { type: Number, default: 0 },
            rank: { type: Number, default: null },
        },
    },
    { timestamps: true }
);

const userDetail = mongoose.model("userDetail", userDetailSchema, "userDetail");
export default userDetail;
