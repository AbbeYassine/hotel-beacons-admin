/**
 * Created by Vyndee on 28/02/2017.
 */
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL || 'mongodb://abbes:123456789@ds021689.mlab.com:21689/dbmongo';

module.exports = function(app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function(err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });

  // mongoose.set('debug', true);

  return mongoose;
};
