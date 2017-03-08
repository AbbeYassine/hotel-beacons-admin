var app = require('./lib/app');
const http = require('http');
var api = require('./lib/api');
var express = require('express');
var path = require('path');
//catch all other


//Set our api routes
app.use("/api", api);

// Catch all other routes and return the index file
// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function () {
  console.log("Server running !!");
});
