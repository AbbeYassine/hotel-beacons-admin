/**
 * Created by Vyndee on 28/02/2017.
 */
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL || 'mongodb://beacons-admin:BestTrinome3@ds133271.mlab.com:33271/beacons-admin';

module.exports = function (app) {
  mongoose.connect(mongoUrl, {
    mongoose: {
      safe: true
    }
  }, function (err) {
    if (err) {
      return console.log('Mongoose - connection error:', err);
    }
  });

  // mongoose.set('debug', true);

  return mongoose;
};
