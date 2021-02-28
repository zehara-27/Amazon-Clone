// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyArzRgtiMxwRF9uKXdGsvP2YvXCe18rTOY",
  authDomain: "clone-612d9.firebaseapp.com",
  databaseURL: "https://clone-612d9-default-rtdb.firebaseio.com",
  projectId: "clone-612d9",
  storageBucket: "clone-612d9.appspot.com",
  messagingSenderId: "1091305430032",
  appId: "1:1091305430032:web:ee8213b1e0e25e40807e95",
  measurementId: "G-L0E6NY0ZV1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
