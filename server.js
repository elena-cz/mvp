var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
// var methodOverride = require('method-override');

// Connect to mongodb

mongoose.connect('mongodb://localhost/morse');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to DB');
});

// Server configuration

  app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
  app.use(morgan('dev'));  // Logs requests to the console                                       // log every request to the console
  app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
  app.use(bodyParser.json());                                     // parse application/json
  app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
  // app.use(methodOverride()); // Don't know what this does yet

// Define mongoose models

var UserPrefs = mongoose.model('UserPrefs', {
  username: String,
  a: String
});


// API Routes

app.get('/userprefs', function(req, res) {

  UserPrefs.find(function(err, prefs) {

    if (err) {
      res.send(err);
    }

    res.json(prefs);

  });

});

app.post('/userprefs', function(req, res) {

  UserPrefs.findOneAndUpdate(
    { username: req.body.username},
    { username: req.body.username, 
      a: req.body.res },
    { upsert: true },
    function(err, userpref) {
      if (err) {
        res.send(err);
      }
    });
});

app.get('/characters', function(req, res) {

  res.sendfile('alphabet.json');

});



// Route for frontend

app.get('*', function(req, res) {
  res.sendfile('./public/index.html');
});





// start app with node

  app.listen(8080);
  console.log("App listening on port 8080");