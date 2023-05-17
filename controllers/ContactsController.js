const asyncHandler = require("express-async-handler")

const getcontacts = asyncHandler(async (req , res) => {
    res.status(200).json({'message':'Get all contacts'})
});

const createcontacts = asyncHandler(async (req , res) => {
    console.log("Te request body is :", req.body);
    const {name, email, phone} = req.body
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All field are required")
    }
    res.status(201).json({'message':'create new contacts'})
});

const getsinglecontacts = asyncHandler(async (req , res) => {
    res.status(200).json({'message':`Get contacts for ${req.params.id}`})
})

const updatecontacts = asyncHandler(async (req , res) => {
    res.status(200).json({'message':`Update contacts for ${req.params.id}`})
});

const deletecontacts = asyncHandler(async (req , res) => {
    res.status(200).json({'message':`delete contacts for ${req.params.id}`})
});


module.exports = {getcontacts,createcontacts,getsinglecontacts,updatecontacts,deletecontacts}