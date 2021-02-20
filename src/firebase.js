import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyAzmMsP2eUKJ8N1oZSlLDZ3S8hOPC2r6WU",
    authDomain: "farmer-portal-d941c.firebaseapp.com",
    projectId: "farmer-portal-d941c",
    storageBucket: "farmer-portal-d941c.appspot.com",
    messagingSenderId: "72819672317",
    appId: "1:72819672317:web:d527689dd2657dfa5cea94"
})

export default firebase