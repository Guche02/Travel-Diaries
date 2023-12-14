const express = require("express");
const router = express.Router();
const _ = require("lodash");

// for uploading images.
const upload = require('../controller/upload');

// requiring the schema.
const Post = require("../models/post");
const User = require("../models/user");

// for cookies and sessions
const passport = require("passport")

passport.use(User.createStrategy());

//using passport for authenticating the users.
passport.serializeUser(User.serializeUser());           //saves the info related to the user on the cookie.
passport.deserializeUser(User.deserializeUser());       //deletes the info related to the user on the cookie. 

// for registering new users.
router.post("/register", function (req, res) {
    //the register method comes from a passport-local-mongoose.
    User.register({email: req.body.email}, req.body.password, function(err, user){
        if (err){
          console.log(err);
          res.redirect("/signup")
        } else {
          passport.authenticate("local")(req, res, function(){
            console.log("Successfully registered!")
            res.redirect("/login")
          })
        }
       });
})

router.post("/login", function(req,res){
    const user = new User({
        email: req.body.email,
        password: req.body.password
      });
    
      req.login(user, function(err){
        if(err){
          console.log(err)
          res.redirect("/login")
        } else {
          passport.authenticate("local")(req, res, function(){
            console.log("Logged In successfully.")
            res.redirect("/")
          });
        }
      })
})

// for composing the posts
router.post("/compose", upload.single("image"), function (req, res) {
  console.log(req.body);
  console.log(req.file);

  const post = new Post({
    title: req.body.title,
    content: req.body.content,
    image: req.file.filename
  })

  //to check if the file is saved correctly.
  post.save().then(function(){
    console.log("Successfully saved!")
    console.log(post.image)
  })
  res.redirect("/")
})


// for logging out.
router.get("/logout", function(req,res){
    req.logout(function(err)
    {
      if (err){
        console.log(err)
      } else {
        res.redirect("/")
      }
    });
  })


module.exports = router;