/**
 * Created by Vyndee on 28/02/2017.
 */
var express = require("express");
var app = express();

require("./db")(app);
require("./parser")(app);


module.exports = app;
