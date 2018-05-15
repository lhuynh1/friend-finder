// Dependencies
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// Sets up an instance of the Express App
var app = express();
var PORT = process.env.PORT || 3000; 

// Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// routing the server to the route files
require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);


app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

