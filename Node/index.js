const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

const vendRef = admin.database().ref('vendors/');
const userRef = admin.database().ref('users/');

const corsHandler = require('cors')({origin: true});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  console.log("RUNNING");
//  //const getTruck = admin.database().ref('/trucks');
//  console.log(getTruck[0]);
//  // console.log(request.parameters);
//  // response.send(ref.snapshot);
//  response.send("U SCREAM FOR ICE CREAM!");
//
// });

// Write and then read back a string from the Database.
// ref.set("hello")
//   .then(function() {
//     return ref.once("value");
//   })
//   .then(function(snapshot) {
//     var data = snapshot.val(); // data === "hello"
//   });

// exports.readData = functions.https.onRequest((request, response) => {
//   ref.set("hello")
//     .then(function() {
//       return ref.once("value");
//     })
//     .then(function(snapshot) {
//       var data = snapshot.val(); // data === "hello"
//     });
// });

// exports.goodFunc = functions.https.onRequest((request, response) => {
//   ref.on("value", function(snapshot) {
//      console.log(snapshot.val());
//   }, function (error) {
//      console.log("Error: " + error.code);
//   });
// });

// exports.dumbFunction = functions.https.onRequest((request, response) => {
//   const num = request.query.num;
//   corsHandler(request, response, () => {
//   response.status(200).send(num);
//   })
// });

// exports.loginUser = functions.https.onRequest((request, response) => {
//   const email = request.query.email;
//   const pass = request.query.pass;

  // for (i = 0; i < vendRef.length + userRef.length; i++) {
  //
  // }

//   usersRef.orderByChild('Email').equalTo(email).on("value", function(snapshot) {
//      console.log(snapshot.val());
//   })
// });
//
exports.loginUser = functions.https.onRequest((request, response) => {
  const email = request.query.email;
  const pass = request.query.pass;

  var emailm = false;
  var passm = false;
  var account;

    userRef.once('value', (snapshot) => {
    snapshot.forEach((childSnapshot) => {

        console.log(childSnapshot.val());

      });
    });
});

// exports.logIn = functions.https.onRequest((request, response) => {
//   var query = admin.database().ref("users/")
//   query.once("value", (snapshot) => {
//     snapshot.forEach((childSnapshot) => {
//       // key will be "ada" the first time and "alan" the second time
//       var key = childSnapshot.key;
//       // childData will be the actual contents of the child
//       var childData = childSnapshot.val();
//       console.log(childata);
//   });
// });
// })

// exports.userLogin = functions.https.onRequest((request, response) => {
//   const email = 'E';
//   const pass = request.query.pass;
//
//   var emailm = false;
//   var passm = false;
//   var account;
//
//   userRef.orderByChild('Email').equalTo(email).on("value", function(snapshot) {
//     console.log(snapshot.val());
//     snapshot.forEach(function(data) {
//         console.log(data.key);
//     });
//   });
// })


// exports.pushTrucks = functions.https.onRequest((request, response) => {
//   console.log("TRUCKS");
//   var tru;
//   response.send(getTruck.ref('/trucks')[0]);
// });


//Function that finds takes current location of user and radius and using dummy datat
//finds which trucks are compatible, those of which it returns each individiual
//trucks data back to user

// exports.returnTrucks = functions.https.onRequest((request, response) => {
//   console.log("Get Trucks");
//   const text = request.query.text;
// });
//
// exports.createUser = functions.https.onRequest((request, response) => {
//   console.log("Creating User");
//   console.log(request.parameters);
//
// });

//Create a user

//Filter trucks based on radius

//Send available Trucks
