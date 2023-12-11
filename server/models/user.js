const mongoose = require("mongoose")
const Post = require("./post");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    post: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ]
})

const User = mongoose.model("User", userSchema);

module.exports = User;