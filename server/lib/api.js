const express = require('express');
const router = express.Router();

var beacons = require('../routes/beacons');
var messages = require("../routes/message");
var promotions = require('../routes/promotions');
var activities = require('../routes/activities');
var chambres = require('../routes/chambres');

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

router.route("/dataset")
  .get(beacons.writeDataSet);

router.route("/prediction")
  .post(beacons.predictionByDate);

router.route("/formatRegression")
  .get(beacons.getDataFormat);

//Message
router.route("/message/beacon/:id")
  .get(messages.getByIdBeacon)
  .post(messages.updateOrCreate);

//Promotions
/*router.route("/promotions")
 .get(promotions.getAll);*/
router.route("/promotions/add")
  .post(promotions.createOne);
/*router.route("/promotions/delete")
 .delete(actors.deleteOne)

 //Activities
 router.route("/activities")
 .get(promotions.getAll);*/
router.route("/activities/add")
  .post(activities.createOne);
/*router.route("/activities/delete")
 .delete(promotions.deleteOne);

 //chambres
 router.route("/chambres")
 .get(chambres.getAll);*/
router.route("/chambres/add")
  .post(chambres.createOne);
/*router.route("/chambres/delete")
 .delete(chambres.deleteOne);
 */

module.exports = router;
