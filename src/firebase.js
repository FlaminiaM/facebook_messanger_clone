import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDISJMPBhjcrxyaBuEHwoLIslkQeVRS9BE",
    authDomain: "facebook-messanger-clone-c2744.firebaseapp.com",
    databaseURL: "https://facebook-messanger-clone-c2744.firebaseio.com",
    projectId: "facebook-messanger-clone-c2744",
    storageBucket: "facebook-messanger-clone-c2744.appspot.com",
    messagingSenderId: "797290930128",
    appId: "1:797290930128:web:fd8a0be082d49ecfb163d5",
    measurementId: "G-L85WQHM8X2"
});

const db = firebaseApp.firestore();

export default db;