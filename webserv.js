var express = require('express');
var app = express();

app.use(express.static('../../Sites/dashboard/dist/'));

var server = app.listen(3000, function () {
  console.log('App listening on port ' + server.address().port);
});
