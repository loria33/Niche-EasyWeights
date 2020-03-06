const Config = {
    
    stripepublishableKey: 'pk_test_a8VqowyWFwi6RuKPLz7RdErZ00ipUYlvH4',
    baseUrl : '',
    paymentUrl:'https://us-central1-easyweights-316db.cloudfunctions.net/completePaymentWithStripe',
    methods : {
        makePayment : {
            url:'payment',
            description: "make payment with CC",
            verb : 'POST',
            jsonMethod : true,
            suffixUrl : '',
            showLoader : true,
            isFlatResponse: false
        },
    },


}


export default Config