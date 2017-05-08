/**
 * Created by Vyndee on 01/03/2017.
 */
var mongoose = require("mongoose");

var beaconSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  name: {
    type: String,
    required: true
  },
  uuid: {
    type: String,
    required: true
  },
  major: {
    type: String,
    required: true
  },
  minor: {
    type: String,
    required: true
  },
  position: {
      type: Object,
      required: true

  }
});

module.exports = mongoose.model("Beacon", beaconSchema);
