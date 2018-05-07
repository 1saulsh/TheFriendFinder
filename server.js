// setup server
//express makes it easier for us to use node in our terminal
var express = require('express');
var app = express();
//allows us to receive our info back in Json form
var bodyParser = require('body-parser');
var path = require ('path');

var PORT= process.env.PORT || 8080;
 
// create application/x-www-form-urlencoded parser
app.use( bodyParser.urlencoded({ extended: true }));
 
 
// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))
 
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))

//require in this file to tell program to pass the app or in this case "express" into the module exports function
require("./app/routing/htmlRoutes.js")(app);

//require in this file to tell program to pass the app or in this case "express" into the module exports function
require("./app/routing/apiRoutes.js")(app);

//LIstener to start teh server
app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT); 
 });