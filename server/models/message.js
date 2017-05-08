/**
 * Created by Vyndee on 09/03/2017.
 */
/**
 * Created by Vyndee on 01/03/2017.
 */
var mongoose = require("mongoose");

var messageSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    index: {
      unique: true
    }
  },
  in: {
    type: String,
    required: true
  },
  out: {
    type: String,
    required: true
  },
  timeout: {
    type: Object,
    required: true
  },
  idBeacon: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Message", messageSchema);
