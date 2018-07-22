const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const cors = require('cors')({origin: true});

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions


// Records vender info in firebase
exports.createVendor = functions.https.onRequest((req, res) => {
  const text = req.query.text;
  res.send(text);

  const name = req.query.name;
  const website = req.query.website;
  const phone = req.query.phone;
  // const latitude = req.query.lat;
  // const longitude = req.query.long;

  const email = req.query.email;
  const password = req.query.password;

  admin.database().ref('/vendors').push({
    'Name': name,
    'website': website,
    'PhoneNumber': phone,
    'Active': 'false',
    'Location': {
      'Latitude': '',
      'Longitude': ''
    },
    'Email': email,
    'Password': password
  });

});

// Records user info in firebase
exports.createUser = functions.https.onRequest((req, res) => {
  const text = req.query.text;
  res.send(text);

  const name = req.query.name;
  const phone = req.query.phone;
  const email = req.query.email;
  const password = req.query.password;

  admin.database().ref('/users').push({
    'Name': name,
    'PhoneNumber': phone,
    'Email': email,
    'Password': password
  });

});

//
exports.startVending = functions.https.onRequest((req, res) => {

  const ref = admin.database().ref("active/")
  var key = ref.push({
    'Name' : "name",
    'Lat' : 0,
    "Lng" : 0
  }).key;
  res.send(key);
});




// exports.returnParam = functions.https.onRequest((req, res) => {
//   const original = req.query.text;
//   res.send(original);
//
//   admin.database().ref('/stuff').push({
//     'more stuff': original
//   });
// });
