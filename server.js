// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 3000;

// Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());