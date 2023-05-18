const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    username: {
        type : String,
        require: [true, "please add a username"]
    },
    password: {
        type : String,
        require: [true, "please add a user password"]
    },
    email: {
        type : String,
        require: [true, "please add a user email address"],
        unique: [true, "Email address alredy taken"]
    },

},{
    timestamp:true,
});

module.exports = mongoose.model("User", userSchema)