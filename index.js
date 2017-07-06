/**
 * Created by sdani on 06/07/2017.
 */


var express = require('express');
var lessMiddleware = require('less-middleware');
var app = express();
var path = require('path');
var public_dir = path.join(__dirname,"src");

// viewed at http://localhost:8080
app.get('/', function(req, res) {
  res.sendFile(path.join(public_dir , "index.html"));
});
app.use(lessMiddleware(public_dir,{"debug":true}));
app.use(express.static(public_dir));

app.listen(process.env.PORT || 5000);
