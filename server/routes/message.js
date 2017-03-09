/**
 * Created by Vyndee on 09/03/2017.
 */
/**
 * Created by Vyndee on 01/03/2017.
 */
var Message = require("../models/message");
var mongoose = require("mongoose");
module.exports = {
  getByIdBeacon: function (req, res, next) {
    console.log(req.param('id'));
    Message.find({idBeacon: req.param('id')}, function (err, message) {
      if (err) return res.status(400).json(err);
      res.status(200).json(message);
    });
  },
  /*createOne: function (req, res, next) {

   Message.create(message, function (err, message) {
   if (err) return res.status(400).json(err);

   res.status(201).json(message);
   });
   },*/
  updateOrCreate: function (req, res, next) {
    console.log(req.param('id'));
    console.log(req);
    var message = {
      id: mongoose.Types.ObjectId(),
      in: req.body.in,
      out: req.body.out,
      timeout: {
        content: req.body.timeout.content,
        period: req.body.timeout.period
      },
      idBeacon: req.param('id')
    };
    if (req.params.id) {
      Message.update({idBeacon: req.param('id')}, message,
        {
          upsert: true,
          setDefaultsOnInsert: true
        },
        function (err, message) {
          if (err) return res.status(400).json(err);
          res.status(201).json(message);
        })
    }
  }
};
