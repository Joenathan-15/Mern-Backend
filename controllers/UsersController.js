const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const User = require("../models/userModel")

const registerUser = asyncHandler(async (req,res) => {
    const {username,email,password} = req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("All field are required");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("User alredy register");
    }
    const hashPassword = await bcrypt.hash(password,10);
    const user = await User.create({
        username,
        email,
        password : hashPassword
    })
    console.log(user)
    if(user){
        res.status(201).json({_id:user.id,email:user.email});
    }else{
        res.status(400);
        throw new Error("User data not valid")
    }
    res.json({message:"register the user"})
});

const loginUser = asyncHandler(async (req,res) => {
    res.json({message:"login user"})
});

const currentUser = asyncHandler(async (req,res) => {
    res.json({message:"current user info"})
});

module.exports = {registerUser,loginUser, currentUser}