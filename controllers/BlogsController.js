const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");

const getblogs = asyncHandler(async (req , res) => {
    const posts = await Blog.find({});
    res.status(200).json(posts);
});

const createblog = asyncHandler(async (req , res) => {
    const {title, content} = req.body;
    console.log("The request body is :", req.body);
    if(!title || !content){
        res.status(400);
        throw new Error("All field are required")
    }
    const posts = await Blog.create({
        title,
        content,
    });
    res.status(201).json({posts})
});

const findblog = asyncHandler(async (req , res) => {
    const post = await Blog.findById(req.params.id);
    if(!post){
        res.status(404);
        throw new Error("Post Not Found");
    }
    res.status(200).json(post)
})

const updateblog = asyncHandler(async (req , res) => {
    const post = await Blog.findById(req.params.id);
    if(!post){
        res.status(404);
        throw new Error("Blog Not Found");
    }
    const updatedblog = await Blog.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
    );
    res.status(200).json(updatedblog)
});

const deleteblog = asyncHandler(async (req , res) => {
    const post = await Blog.findById(req.params.id);
    if(!post){
        res.status(404);
        throw new Error("Post Not Found");
    }
    await Blog.deleteOne({
        _id: req.params.id
    })
    res.status(200).json({'message':`Post Has been deleted Succesfuly`})
});


module.exports = {getblogs,createblog,findblog,updateblog,deleteblog}