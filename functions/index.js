const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const express = require('express');
const app = express();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

app.get('/users', (req, res) => {
    admin.
        firestore()
        .collection('Users')
        .get()
        .then((data) => {
            let users = []
            data.forEach(doc => {
                users.push(doc.data());
            });
            return res.json(users);
        })
        .catch(err => console.error(err));
})

exports.api = functions.https.onRequest(app)