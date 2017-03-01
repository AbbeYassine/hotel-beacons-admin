/**
 * Created by Vyndee on 01/03/2017.
 */
var Beacon = require("../models/beacon");
var mongoose = require("mongoose");
module.exports = {
  getAll: function (req, res, next) {
    Beacon.find(function (err, actors) {
      if (err) return res.status(400).json(err);

      res.status(200).json(actors);
    });
  },
  createOne: function (req, res, next) {
    var beacon = {
      id: mongoose.Types.ObjectId(),
      name: req.body.name,
      uuid: req.body.uuid,
      major: req.body.major,
      minor: req.body.minor
    };
    Beacon.create(beacon, function (err, beacon) {
      if (err) return res.status(400).json(err);

      res.status(201).json(beacon);
    });
  }
};
