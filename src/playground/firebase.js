import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);

const db = firebase.database();

export { firebase, db as default };

// db.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// db.ref("location/city")
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.log("error fetching data", err);
//   });

// const onValueChange = db.ref().on(
//   "value",
//   snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   err => {
//     console.log("error on change data", err);
//   }
// );

// setTimeout(() => {
//   db.ref("isSane").set(28);
// }, 3500);

// setTimeout(() => {
//   db.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//   db.ref("isSane").set(false);
// }, 10500);

// db.ref()
//   .set({
//     name: "fktrctq",
//     age: 30,
//     stressLevel: 9,
//     job: {
//       title: "dj",
//       company: "eban"
//     },
//     isSane: false,
//     location: {
//       city: "samara",
//       country: "ru"
//     }
//   })
//   .then(() => {
//     console.log("data saved");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.ref("username").remove();

// db.ref().set("this is test data");

// db.ref("age").set(31);
// db.ref("location/city").set("pupa&lupa");

// db.ref("attributes")
//   .set({
//     height: 190,
//     weight: 90
//   })
//   .then(() => {
//     console.log("attributes written");
//   })
//   .catch(err => {
//     console.log(err);
//   });

// db.ref()
//   .remove()
//   .then(() => {
//     console.log("db removed");
//   })
//   .catch(err => {
//     console.log("error is ", err);
//   });

// db.ref("isSane").set(null);

// db.ref().update({
//   stressLevel: 1,
//   "job/company": "ibiza",
//   "location/city": "ibiza"
// });
