/**
 * Created by Vyndee on 01/03/2017.
 */
var Beacon = require("../models/beacon");
var mongoose = require("mongoose");
var fs = require("fs");
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
      minor: req.body.minor,
      position: {
        longitude: req.body.position.longitude,
        latitude: req.body.position.latitude
      }
    };
    Beacon.create(beacon, function (err, beacon) {
      if (err) return res.status(400).json(err);

      res.status(201).json(beacon);
    });
  },
  getByUiid: function (req, res) {

    Beacon.findOne({
      uuid: req.body.uuid
    }, function (err, beacon) {
      if (err) {
        return res.status(403)
          .send({
            success: false,
            message: "Beacon not found"
          })
      }
    })
  },

  writeDataSet: function (req, res) {

    console.log(req);
    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function convertString(date) {
      return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }

    var randomDateV = new Date(2015, 0, 1);
    var data = [];
    for (var d = randomDateV; d <= new Date(); d.setDate(d.getDate() + 1)) {
      for (var j = 0; j < Math.floor(Math.random() * 1000); j++) {
        data.push({date: convertString(d)});
      }

    }

    fs.writeFile("myData.json", JSON.stringify(data), "utf8", function (res) {
      console.log("success write");

    });
    res.json({success: true});
  },
  getDataFormat: function (req, res) {
    Beacon.find({uuid: req.body.uuid}, function (err, beacons) {
      //data 3andi :p
      /* {
       id ,
       uuid : "",
       date : ""
       }
       */
      fs.readFile("myData.json", "utf8", function readFileCallback(err, data) {
        if (err) {
          console.log(err);
          res.json({success: false});
          return;
        }
        data = JSON.parse(data);
        console.log(data);
        //déja trié
        var result = [];
        var i = 0;
        while (i < data.length) {
          var date = data[i].date;
          var s = 1;
          i++;
          while (i < data.length && date.localeCompare(data[i].date) == 0) {
            s++;
            i++;
          }
          result.push({date: date, num: s});
        }

        console.log(result);
        //var now = new Date().toLocaleDateString();
        //DateFormat format = new SimpleDateFormat("yyyy-MM-dd", Locale.ENGLISH);
        oldDate = convertDate(result[0].date);
        i = 0;
        var cmp = 0;
        var resultFinal = [];
        for (var d = oldDate; d <= new Date(); d.setDate(d.getDate() + 1)) {
          var tmp = d.getDate() + "/" + (d.getMonth() + 1) + "/" + (d.getFullYear());

          if (cmp < 5) {
            console.log(tmp, result[i].date);
            console.log(convertDate(tmp).getTime(), convertDate(result[i].date).getTime())
          }
          if (i < result.length && convertDate(tmp).getTime() == convertDate(result[i].date).getTime()) {
            resultFinal.push({x0: cmp, x1: cmp, y: result[i].num});
            i++;
          } else {
            resultFinal.push({x0: cmp, x1: cmp, y: 0});
          }
          cmp++;
        }
        console.log(i);

        fs.writeFile("../../INSAT/PPP/micro-service-prediction/python-send-data/data.json", JSON.stringify(resultFinal), 'utf8', function callback() {
          console.log("write success");
        });
        res.json({success: true});

      });

      function convertDate(date) {
        var parts = date.split("/");
        return new Date(parts[2], parts[1] - 1, parts[0]);
      }

      console.log(beacons);
    })
  }


};
