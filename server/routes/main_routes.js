// for routing
const express = require("express");
const router = express.Router();

// for the schema
const Post = require("../models/post");
const User = require("../models/user");


const _ = require("lodash")


router.get("/", function (req, res) {
    Post.find({}).then(function (result) {
        if (result.length === 0) {
            console.log("No posts are present!")
            res.render("home", {posts: [], authenticated: req.isAuthenticated()})     // it returns true if the user is authenticated.
        } else {
            res.render("home", { posts: result, authenticated: req.isAuthenticated()})
        }
    })
})

router.get("/about", function (req, res) {
    res.render("about", {authenticated: req.isAuthenticated()})
})

router.get("/contact", function (req, res) {
    res.render("contact", {authenticated: req.isAuthenticated()})
})

router.get("/compose", function (req, res) {
    if (req.isAuthenticated()){
        res.render("compose", {authenticated: req.isAuthenticated()});
      } else {
        res.redirect("/login");
      }
})

router.get("/diaries", function (req, res) {
    res.render("diary", {authenticated: req.isAuthenticated()})
})

router.get("/login", function (req, res) {
    res.render("login", {authenticated: req.isAuthenticated()})
})

router.get("/signup", function (req, res) {
    res.render("signup", {authenticated: req.isAuthenticated()})
})


router.get("/posts/:postID", function (req, res) {
    const reqId = req.params.postID

    Post.findOne({ _id: reqId }).then(function (result) {
        if (result) {
            res.render("diary", { post: result, notFoundMessage: " ", authenticated: req.isAuthenticated()})
        } else {
            res.render("diary", { notFoundMessage: "No results found" , authenticated: req.isAuthenticated()})
        }
    })
})

router.post("/search", function(req,res){
   const reqTitle =  _.capitalize(req.body.title)
   Post.findOne({title: reqTitle}).then(function(result){
    if(result){
        res.redirect("/posts/" + result._id)
    } else {
        res.render("diary", {notFoundMessage: "No result were found!", post: NaN})
    }
   })
})


module.exports = router;