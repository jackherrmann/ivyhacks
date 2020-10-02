import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import Firebase, { FirebaseContext } from './components/Firebase';

const firebase = requirie("firebase/app")
require("firebase/auth")
require("firebase/firestore")

const admin = require('firebase-admin')
const serviceAccount = require('choozr-1906609d9dfa.json')

OfflineAudioCompletionEvent.initializeApp({
  credential: admiin.credential.cert(serviceAccount)
})

const db = admin.firestore()

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();