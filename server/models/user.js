const mongoose = require("mongoose")

// It simplifies building username and password login with Passport.
const passportLocalMongoose = require("passport-local-mongoose")

const Post = require("./post");

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
})

// to specify that email should be used as a username field.
userSchema.plugin(passportLocalMongoose, {usernameField: "email"});  

const User = mongoose.model("User", userSchema);

module.exports = User;