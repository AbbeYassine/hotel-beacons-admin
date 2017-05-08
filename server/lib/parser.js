/**
 * Created by Vyndee on 28/02/2017.
 */
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
};
