const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getcontacts = asyncHandler(async (req , res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

const createcontacts = asyncHandler(async (req , res) => {
    const {name, email, phone} = req.body;
    console.log("Te request body is :", req.body);
    if(!name || !email || !phone){
        res.status(400);
        throw new Error("All field are required")
    }
    const contact = await Contact.create({
        name,
        email,
        phone,
    });
    res.status(201).json({contact})
});

const getsinglecontacts = asyncHandler(async (req , res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact)
})

const updatecontacts = asyncHandler(async (req , res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new: true},
    );
    res.status(200).json(updatedContact)
});

const deletecontacts = asyncHandler(async (req , res) => {
    const contact = await Contact.findById(req.params.id);
    if(!contact){
        res.status(404);
        throw new Error("Contact Not Found");
    }
    await Contact.findByIdAndDelete(
        req.params.id
    )
    res.status(200).json({'message':`delete contacts for ${req.params.id}`})
});


module.exports = {getcontacts,createcontacts,getsinglecontacts,updatecontacts,deletecontacts}