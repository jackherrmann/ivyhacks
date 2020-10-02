import app from 'firebase/app';
import 'firebase/auth';

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

class Firebase {
    constructor() {
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // Authentication

    createUser = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    signInUser = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    signOut = () => this.auth.signOut();
    
}

export default Firebase;