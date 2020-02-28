const Config = {
    
    stripepublishableKey: 'pk_test_a8VqowyWFwi6RuKPLz7RdErZ00ipUYlvH4',
    baseUrl : 'https://api.comg.io/v1',
    methods : {
        conversationGroups : {
            description: "Get conversation list for user per org",
            isAuthenticated : true,
            verb : 'GET',
            sendDeviceKey : true,
            jsonMethod : true,
            suffixUrl : '/conversations',
            showLoader : true,
            isFlatResponse: false
        },
    },


}


export default Config