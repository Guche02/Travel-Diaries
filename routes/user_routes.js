const express = require("express");
const router = express.Router();

// requiring the schema.
const Post = require("../models/post");
const User = require("../models/user");

// for registering new users.
router.post("/register", function (req, res) {
    console.log(req.body)
    const user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save();
})

router.post("/login", function(req,res){
    
})

router.post("/compose", function(req,res){
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    })
    post.save();
    res.redirect("/")
})


module.exports = router;