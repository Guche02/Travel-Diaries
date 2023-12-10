// For routing
const express = require("express");
const app = express();

//For connection
const {mongooseConnect} = require("./controller/connect")
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
app.use("/", require("./routes/main_routes"))
app.use("/", require("./routes/user_routes"))


app.listen(3000, function(req,res){
    console.log("Server listening at port 3000.")
})


// Task for tommorow:
// 1. Add compose feature. DONE!
// 2. Display it on the home page. DONE!
// 3. Add search and read More Feature.
// 4. Associate it with a user.