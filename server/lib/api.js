const express = require('express');
const router = express.Router();

var beacons = require('../routes/beacons');

/* GET api listing. */
router.get('/', function (req, res) {
  res.send('api works');
});

router.route("/beacons")
  .get(beacons.getAll)
  .post(beacons.createOne);

module.exports = router;
