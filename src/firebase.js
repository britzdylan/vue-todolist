import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
  apiKey: "AIzaSyBqcim7AwAEP7_0itGeopUDxRHBZb6mKwQ",
  authDomain: "todolst-f1149.firebaseapp.com",
  projectId: "todolst-f1149",
  storageBucket: "todolst-f1149.appspot.com",
  messagingSenderId: "756413907128",
  appId: "1:756413907128:web:dd07acab00f26b439a344d",
  measurementId: "G-RVXP2GJ31D"
};
firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection("users");
const todolistCollection = db.collection("todolists");

// export utils/refs
export { db, auth, usersCollection, todolistCollection };
