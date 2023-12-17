// For routing
const express = require("express");
const app = express();

// establishing a session and configuring the basics.
const session = require("express-session")
const passport = require("passport")

app.use(session({
  secret: "My little Secret.",  //used to assign a session ID.
  resave: false,                //used to avoid unnecessary session saves, when nothing is modified in the session.
  saveUninitialized: false      //uninitialzed session is new and not yet modified session, setting it to false helps us avoid unnecessary saves
  //and comply with laws that require permission before setting a cookie.
}));

// initializing passport
app.use(passport.initialize());
app.use(passport.session());     //use passport to initialize the session.


//For connection
const { mongooseConnect } = require("./server/controller/connect")
mongooseConnect("mongodb://127.0.0.1:27017/TravelDB")

// view engine
const ejs = require("ejs");
app.set('view engine', 'ejs');

// for parsing the http requests
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// for serving the images and css files
app.use(express.static("./public"));
app.use(express.static("./uploads"));


// refer to the main_routes file for any / requests.
app.use("/", require("./server/routes/main_routes"))
app.use("/", require("./server/routes/user_routes"))


app.listen(3000, function (req, res) {
  console.log("Server listening at port 3000.")
})


// Tasks to do:
// associate the posts with user.



