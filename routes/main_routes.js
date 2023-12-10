const express = require("express");
const router = express.Router();
// const {search} = require("./controller/search")
const Post = require("../models/post");
const User = require("../models/user");

router.get("/", function(req,res){
    Post.find({}).then(function(result){
        if (result.length === 0 ){
            console.log("No posts are present!")
            res.render("home", {})
        } else {
            res.render("home", {posts: result})
        }
    })
})

router.get("/about", function(req,res){
    res.render("about",{})
})

router.get("/contact", function(req,res){
    res.render("contact",{})
})

router.get("/compose", function(req,res){
    res.render("compose",{})
})

router.get("/diaries", function(req,res){
    res.render("diary",{})
})

router.get("/login", function(req,res){
    res.render("login",{})
})

router.get("/signup", function(req,res){
    res.render("signup", {})
})

// router.post("/search", function(req,res){
//     search(req.body.title)
// })


module.exports = router;