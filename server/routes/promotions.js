var firebase = require('firebase');
var gcStorageBucketName = 'hotelproject-4c6d6.appspot.com'
firebase.initializeApp({

    'serviceAccount': './service-account.json',
    "databaseURL": "https://hotelproject-4c6d6.firebaseio.com/"

});

var gcStorage = require('@google-cloud/storage')({
  projectId: 'hotelproject-4c6d6',
  keyFilename: './service-account.json'
});

var promotionsImgBucket = gcStorage.bucket(gcStorageBucketName);
var realtimeDBref = firebase.app().database().ref();


module.exports = {


  createOne: function (req, res, next) {


      //importing image into google cloud storage
        var image = fs.readFileSync(req.img);

        promotionsImgBucket.upload(req.img, function(err, file) {
          if (!err) {
            console.log('image uploaded into cloud storage ! ');
          }
          else {
            console.log('error upload ! '+err);

          }
        });


        //importing a promotion into firebase realtime database

        realtimeDBref.once('value')
            .then(function(snap) {
                console.log('snap.val()', snap.val());
            });

        var promotionsRef = realtimeDBref.child('promotions');
        // Create a new ref and log it’s push key
        var promotionRef = promotionsRef.push();
        // Create a new ref and save data to it in one step
        var promotionRef = promotionsRef.push({
            title: req.title,
            rating: req.rating,
            image: 'https://storage.googleapis.com/'+gcStorageBucketName+'/'+req.img,
        });








   },

};
