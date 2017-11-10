var express = require('express');
var router = express.Router();
var Promise = require("bluebird");
var fs = require('fs');


/* GET users listing. */
router.get('/', function(req, res, next) {
  getCharacterJSON()
    .then( (data) => {
      res.send(data);
    });
});


var getCharacterJSON = function() {
  console.log('getCharacterJSON ran');
  return new Promise(function(resolve, reject) {
    fs.readFile('./alphabet.json', 'utf8', (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};


module.exports = router;
