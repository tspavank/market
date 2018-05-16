var express = require('express');
var path = require('path');

var logger = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 4020;
var app = express();
var cors = require('cors');


app.use(express.static(__dirname + '/'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.get('Origin') || '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,PUT,PATCH,POST,DELETE');
  res.header('Access-Control-Expose-Headers', 'Content-Length');
  res.header('Access-Control-Allow-Headers', 'Accept, Authorization, Content-Type, X-Requested-With, Range');
  if (req.method === 'OPTIONS') {
    return res.send(200);
  } else {
    return next();
  }
});


const corsOptions = {
  origin: 'http://localhost:6060'
}

app.use(cors(corsOptions))
/* app.use(express.static(path.join(__dirname))); */




app.listen(port);
console.log('CR UI is hosted on port :  ' + port);
