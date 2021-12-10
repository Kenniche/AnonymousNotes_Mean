// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

// //Morgan console logging
// let morgan = require("morgan");
// app.use(morgan('dev'));

// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Because we are not rendering and are sending json instead
app.use(bodyParser.json());

// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './angular-anonNotes/dist')));

// require the mongoose configuration file which does the rest for us
require('./server/config/mongoose.js');

//Routes Here:
// store the function in a variable
var routes_setter = require('./server/config/routes.js');
// invoke the function stored in routes_setter and pass it the "app" variable
routes_setter(app);


// Setting our Server to Listen on Port: 9090
app.listen(9090, function() {
    console.log("listening on port 9090 for Restful Task API");
})