const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, "Please add the contact name"]
    },
    email:{
        type: String,
        require: [true, "Please add the contact email"]
    },
    phone:{
        type: String,
        require: [true, "Please add the contact phone"]
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model("Contact", contactsSchema)