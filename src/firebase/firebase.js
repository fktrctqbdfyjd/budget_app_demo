import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyDU5197hFVYqLPNIhr89al8s0v73A0AFUw",
  authDomain: "react-budget-app-c2a65.firebaseapp.com",
  databaseURL: "https://react-budget-app-c2a65.firebaseio.com",
  projectId: "react-budget-app-c2a65",
  storageBucket: "react-budget-app-c2a65.appspot.com",
  messagingSenderId: "267324202760"
};

firebase.initializeApp(config);

const db = firebase.database();

db.ref()
  .set({
    name: "fktrctq",
    age: 30,
    stressLevel: 9,
    job: {
      title: "dj",
      company: "eban"
    },
    isSane: false,
    location: {
      city: "samara",
      country: "ru"
    }
  })
  .then(() => {
    console.log("data saved");
  })
  .catch(err => {
    console.log(err);
  });

db.ref("username").remove();

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

db.ref().update({
  stressLevel: 1,
  "job/company": "ibiza",
  "location/city": "ibiza"
});
