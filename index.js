var fs = require('fs');
var http = require('http');
var request = require('request');

var localfile = "";
var remotefile = "";

fs.readFile('package.json', 'utf8', function (err, data) {
  if (err) throw err;
  if(!err){
    localfile = data; // get local file
  } else {
    throw err;
  }

  request('https://raw.githubusercontent.com/renzowesterbeek/siteupdater/master/package.json', function(error, response, body) {
    if(!error && response.statusCode == 200){
      remotefile = body; // get remote file

      if(localfile !== remotefile){
        console.log("there was a difference");
      }
    } else {
      throw error;
    }
  });
});
