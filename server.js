const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan')
const session = require('express-session')
const mongoose = require("mongoose");
const routes = require("./routes");
const passport = require('./passport');
const app = express();
const PORT = process.env.PORT || 3001;

// Use morgan logger
app.use(morgan('dev'))

// Define middleware here
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sessions
app.use(
	session({
		secret: 'blue-bear', 
		resave: false, 
		saveUninitialized: false 
	})
)

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Passport
app.use(passport.initialize())
app.use(passport.session())

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/volunteerManager");

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
