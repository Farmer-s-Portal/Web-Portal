import firebase from "firebase";

import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAzmMsP2eUKJ8N1oZSlLDZ3S8hOPC2r6WU",
  authDomain: "farmer-portal-d941c.firebaseapp.com",
  databaseURL: "https://farmer-portal-d941c-default-rtdb.firebaseio.com/",
  projectId: "farmer-portal-d941c",
  storageBucket: "farmer-portal-d941c.appspot.com",
  messagingSenderId: "72819672317",
  appId: "1:72819672317:web:d527689dd2657dfa5cea94",
});
const base = firebase.firestore();
export const fire = base;
export default firebase;
