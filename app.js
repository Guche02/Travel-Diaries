// For routing
const express = require("express");
const app = express();

//For connection
const {mongooseConnect} = require("./server/controller/connect")
mongooseConnect("mongodb://127.0.0.1:27017/TravelDB")

// view engine
const ejs = require("ejs");
app.set('view engine', 'ejs');

// for parsing the http requests
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// for serving the images and css files
app.use(express.static("./public"));

// refer to the main_routes file for any / requests.
app.use("/", require("./server/routes/main_routes"))
app.use("/", require("./server/routes/user_routes"))


app.listen(3000, function(req,res){
    console.log("Server listening at port 3000.")
})


// Tasks left:
// 1. Complete Authentication.
// 2. Associate the posts with their users.
// 
