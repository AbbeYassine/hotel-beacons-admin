const express = require('express');
const router = express.Router();

var beacons = require('../routes/beacons');
var messages = require("../routes/message");

/* GET api listing. */
router.get('/', function (req, res) {
  res.send('api works');
});

router.use(function (req, res, next) {
  // do logging

  res.setHeader('Access-Control-Allow-Origin', '*');
  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  // console.log(req);
  console.log('###### Request Triggered ######');

  console.log('From :' + req.url);
  if (req.body !== null) {
    console.log('With a body content :' + JSON.stringify(req.body));
  }
  console.log('###############################');
  console.log('');

  next(); // make sure we go to the next routes and don't stop here
});

//Beacons
router.route("/beacons")
  .get(beacons.getAll);
router.route("/beacons/add")
  .post(beacons.createOne);

//Message
router.route("/message/beacon/:id")
  .get(messages.getByIdBeacon)
  .post(messages.updateOrCreate);

module.exports = router;
