import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from './models/user.js';
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
            console.log(createdUser);
            let token = jwt.sign({username} , process.env.ACCESS_TOKEN_SECRET);
            res.cookie("token", token);
            res.status(200).json({ message: "User registered successfully" });
        })
    });
});

app.post('/api/signin', async(req, res) =>{
    let user = await userModel.findOne({username: req.body.username});
    if(!user) return res.status(404).json({ message: "Username or password is incorrect!" });

    bcrypt.compare(req.body.password, user.password, (err, result) =>{
        if(!result) return res.status(404).json({ message: "Username or password is incorrect!" });

        let token = jwt.sign({username: user.username} , process.env.ACCESS_TOKEN_SECRET);
        res.cookie("token", token);
        res.status(200).json({ message: "User signed in successfully" });
    });
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