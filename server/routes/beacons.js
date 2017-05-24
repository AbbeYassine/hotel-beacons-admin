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


    var beacons;
    Beacon.find(function (err, b) {
      if (!err) {
        beacons = b;
        var data = [];
        for (var i = 0; i < beacons.length; i++) {
          var randomDateV = new Date(2015, 0, 1);
          var dates = [];
          for (var d = randomDateV; d <= new Date(); d.setDate(d.getDate() + 1)) {
            for (var j = 0; j < Math.floor(Math.random() * 1000); j++) {
              dates.push(convertString(d));
            }
          }
          data.push({beacon: beacons[i], dates: dates});
        }
        fs.writeFile("myData.json", JSON.stringify(data), "utf8", function (res) {
          console.log("success write");

        });
        res.json({success: true});
      }
    });

    function randomDate(start, end) {
      return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function convertString(date) {
      return date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    }


  },


  predictionByDate: function (req, res) {
    var datePredicted = convertDate(req.body.date);
    console.log(datePredicted);
    var finalResult;
    fs.readFile("prediction.json", "utf8", function readFileCallback(err, data) {
      if (err) {
        console.log("hello");
        fs.readFile("myData.json", "utf8", function readFileCallback(err, data) {
          if (err) {
            res.status(500).send({success: false, message: "Not existing Data "});
          } else {
            data = JSON.parse(data);
            //déja trié
            var result = [];
            for (var k = 0; k < data.length; k++) {
              var i = 0;
              var dates = [];
              var total = 0;
              while (i < data[k].dates.length) {
                var date = data[k].dates[i];
                var s = 1;
                i++;
                while (i < data[k].dates.length && date.localeCompare(data[k].dates[i]) == 0) {
                  s++;
                  i++;
                }
                total += s;
                dates.push({date: date, visites: s});
              }
              result.push({beacon: data[k].beacon, dates: dates, total: total});
            }

            fs.writeFile("prediction.json", JSON.stringify(result), "utf8", function (res) {
              console.log("success write");
            });
            finalResult = predictionAlgo(result, datePredicted);
            res.send({success: true, data: finalResult});
          }
        })
      } else {
        console.log("hello");
        //TODO : Complete date jusqu'a present date
        finalResult = predictionAlgo(JSON.parse(data),datePredicted);
        res.send({success: true, data: finalResult});
      }
    });


    function predictionAlgo(data, datePredicted) {

      var finalResult = [];
      for (var i = 0; i < data.length; i++) {

        //First Moy
        var lastDate = convertDate(data[i].dates[data[i].dates.length - 1].date);
        //TODO difference ;
        var diff = dateDiff(lastDate, datePredicted);
        console.log(diff);
        var length = data[i].dates.length;
        var total = data[i].total;
        var moy = 0;
        for (j = 0; j < diff.day; j++) {
          moy = total / length;
          total += moy;
          length += 1;
          //console.log(total, length, moy);
        }


        //second Moy
        var moyDay = 0;
        length = 0;
        total = 0;
        for (j = 0; j < data[i].dates.length; j++) {
          var date = convertDate(data[i].dates[j].date);
          if (date.getDay() == datePredicted.getDay()) {
            length++;
            total += data[i].dates[j].visites;
          }
        }
        console.log(total,length);
        moyDay = total / length;
        finalResult.push({beacon: data[i].beacon, predicted: moyDay});
      }
      return finalResult;
    }

    function convertDate(date) {
      var parts = date.split("/");
      return new Date(parts[2], parts[1] - 1, parts[0]);
    }

    function dateDiff(date1, date2) {
      var diff = {}                           // Initialisation du retour
      var tmp = date2 - date1;

      tmp = Math.floor(tmp / 1000);             // Nombre de secondes entre les 2 dates
      diff.sec = tmp % 60;                    // Extraction du nombre de secondes

      tmp = Math.floor((tmp - diff.sec) / 60);    // Nombre de minutes (partie entière)
      diff.min = tmp % 60;                    // Extraction du nombre de minutes

      tmp = Math.floor((tmp - diff.min) / 60);    // Nombre d'heures (entières)
      diff.hour = tmp % 24;                   // Extraction du nombre d'heures

      tmp = Math.floor((tmp - diff.hour) / 24);   // Nombre de jours restants
      diff.day = tmp;

      return diff;
    }
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
    });
  },


};
