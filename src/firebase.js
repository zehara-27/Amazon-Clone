// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCb_6gTb7wo95Z7Y74AH8SIKO43RbNPfq8",
  authDomain: "clone-b0bf5.firebaseapp.com",
  projectId: "clone-b0bf5",
  storageBucket: "clone-b0bf5.appspot.com",
  messagingSenderId: "952956641067",
  appId: "1:952956641067:web:bcb2b8b862a997d2026f6e",
  measurementId: "G-RTQL01PP4V",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
