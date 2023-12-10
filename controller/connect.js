const mongoose = require("mongoose");

const mongooseConnect = function (url) {
    mongoose.connect(url).then(function () {
        console.log("Successfully connected to the database.")
    })
}

module.exports = {
    mongooseConnect
};


