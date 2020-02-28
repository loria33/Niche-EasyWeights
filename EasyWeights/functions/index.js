const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// eslint-disable-file no-use-before-define 

const functions = require('firebase-functions');
const stripe = require('stripe')('XXXXXXXXXXXXXXXXXXXXXXXXX');
// eslint-disable-next-line promise/always-return
exports.completePaymentWithStripe = functions.https.onRequest((request, response) => {

        stripe.charges
        .create({
            amount:request.body.amount,
            currency:request.body.currency,
            source:'tok_mastercard' 
        })
        // eslint-disable-next-line promise/always-return
        .then(charges => {
            response.send(charges);
            return null;
        })

        .catch(err => {
            console.log(err);
        });
    }
);