const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
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