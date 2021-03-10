// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
import * as admin from "firebase-admin";
import serviceAccount from "./ServiceAccountKey.json"
const firebaseConfig = {
    apiKey: "AIzaSyAF1mYvRnFakZY1F58B3c8jS5vxjxLx75s",
    authDomain: "amzon-clone-pv62020ee1.firebaseapp.com",
    projectId: "amzon-clone-pv62020ee1",
    storageBucket: "amzon-clone-pv62020ee1.appspot.com",
    messagingSenderId:  "1075342633787",
    appId: "1:1075342633787:web:dc443b224de0abeb04251e",
    measurementId: "G-5LTJQLT9ZG"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };


// admin.initializeApp({
//     credential:admin.credential.cert(serviceAccount)
// });

// const uid = "zUsIQSHRoNRD2IPik44Q7IMAlql1";

// admin
//   .auth()
//   .createCustomToken(uid)
//   .then((customToken) => {
//     // Send token back to client
//       console.log(customToken);
//   })
//   .catch((error) => {
//     console.log("Error creating custom token:", error);
//   });
