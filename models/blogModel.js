const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
    title:{
        type: String,
        require: [true, "Title is required"]
    },
    content:{
        type: String,
        require: [true, "Content is required"]
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model("Blog", blogsSchema)