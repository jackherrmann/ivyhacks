import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDlf3gdrVvXNpWVJ4NVTt2xF-oND0GbXaE",
    authDomain: "choozr.firebaseapp.com",
    databaseURL: "https://choozr.firebaseio.com",
    projectId: "choozr",
    storageBucket: "choozr.appspot.com",
    messagingSenderId: "156228790860",
    appId: "1:156228790860:web:f17939d9d55416020162e9",
    measurementId: "G-5LD4RVTDLC"
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();