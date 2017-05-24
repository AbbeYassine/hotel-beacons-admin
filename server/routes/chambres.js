const fs = require('fs');
var firebase = require('firebase');
var gcStorageBucketName = 'hotelproject-4c6d6.appspot.com';
var formidable = require("formidable");
if (!firebase.apps.length) {
  firebase.initializeApp({

    'serviceAccount': './service-account.json',
    "databaseURL": "https://hotelproject-4c6d6.firebaseio.com/"

  });
}
var gcStorage = require('@google-cloud/storage')({
  projectId: 'hotelproject-4c6d6',
  keyFilename: './service-account.json'
});

var chambresImgBucket = gcStorage.bucket(gcStorageBucketName);
var realtimeDBref = firebase.app().database().ref();


module.exports = {


  createOne: function (req, res, next) {

    var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {

      if (files.file && fields.title) {
        var typeSplitting = files.file.type.split("/");
        var imgType = typeSplitting[1];
        fs.renameSync(files.file.path, files.file.path + "." + imgType)
        console.log(files.file.path + "." + imgType);

        chambresImgBucket.upload(files.file.path + "." + imgType, function (err, file) {
          if (!err) {
            console.log('image uploaded into cloud storage ! ' + JSON.stringify(file.id));
            //importing a promotion into firebase realtime database

            realtimeDBref.once('value')
              .then(function (snap) {
              });

            var chambresRef = realtimeDBref.child('chambres');
            // Create a new ref and log it’s push key
            var chambreRef = chambresRef.push();
            // Create a new ref and save data to it in one step
            var chambreRef = chambresRef.push({
              title: fields.title,
              image: 'https://storage.googleapis.com/' + gcStorageBucketName + "/" + file.id,
            });

            if (err) return res.status(400).json(err);

            res.status(201).json({message: "added with success", status: true});


          }
          else {
            console.log('error upload ! ' + err);

          }
        });
      } else {
        res.status(400).json({message: "error in body", status: false});
      }


    });


  },

};
