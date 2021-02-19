import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
    apiKey: "AIzaSyA6p7BGCKTcSvrQaL1ls7YzTbjra0_VcTM",
    authDomain: "farmer-portal-d3827.firebaseapp.com",
    projectId: "farmer-portal-d3827",
    storageBucket: "farmer-portal-d3827.appspot.com",
    messagingSenderId: "125315416275",
    appId: "1:125315416275:web:7eabf1914103d134c99426"
})

export default firebase