const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
// eslint-disable-file no-use-before-define 


// eslint-disable-next-line promise/always-return
exports.completePaymentWithStripe = functions.https.onRequest((request, response) => {
        console.log('easyweights');
        const stripe = require('stripe')('sk_test_uEbyBwUmO5yez807zlOTE2yt00OsDeC6jp');
        console.log('Request params:'+ request.body.amount + ' ' + request.body.currency);
        stripe.charges
        .create({
            amount:request.body.amount,
            currency:request.body.currency,
            source:'tok_mastercard' 
        })
        // eslint-disable-next-line promise/always-return
        .then(charges => {
            console.log('easyweights in then');
            console.log('easyweights' + charges);
            response.send(charges);
        })

        .catch(err => {
            console.log('easyweights in catch');
            console.log(err);
        });
    }
);