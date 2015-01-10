var express = require('express');
var httpProxy = require('http-proxy');
var path = require('path');
var jade = require('jade');

var apiProxy = httpProxy.createProxyServer();
var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));

app.all("/api/*", function(req, res) {
    apiProxy.web(req, res, { target: 'https://feedwrangler.net'});
});

app.get('*', function (req, res) {
  res.render("index");
});

var server = app.listen(8000);

