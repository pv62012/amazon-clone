// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAF1mYvRnFakZY1F58B3c8jS5vxjxLx75s",
    authDomain: "amzon-clone-pv62020ee1.firebaseapp.com",
    projectId: "amzon-clone-pv62020ee1",
    storageBucket: "amzon-clone-pv62020ee1.appspot.com",
    messagingSenderId: "1075342633787",
    appId: "1:1075342633787:web:dc443b224de0abeb04251e",
    measurementId: "G-5LTJQLT9ZG"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };