const express = require("express");
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.static("./public"));


app.get("/", function(req,res)
{
    res.render("home",{})
})


app.get("/about", function(req,res){
    res.render("about",{})
})

app.get("/contact", function(req,res){
    res.render("contact",{})
})

app.get("/compose", function(req,res){
    res.render("compose",{})
})

app.get("/diaries", function(req,res){
    res.render("diary",{})
})

app.get("/login", function(req,res){
    res.render("login",{})
})

app.get("/signup", function(req,res){
    res.render("signup",{})
})

app.listen(3000, function(req,res){
    console.log("Server listening at port 3000.")
})