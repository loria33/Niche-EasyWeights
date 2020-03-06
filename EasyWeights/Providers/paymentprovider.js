import FetchHelper from '../Utils/FetchHelper';

const PaymentProvider = {
    async makePayment(amount, currency, token) {
        debugger;
        try {
            const urlData = {};
            const bodyData = {
                amount:amount,
                currency:currency,
                token:token
            }
            return await FetchHelper.execute("makePayment",urlData,bodyData).then(result => {
              if(result) {
                    return result;  
                }
            }).catch(error => {
                return Promise.reject(error);
            })
        }
        catch (error) {
            return Promise.reject(error);
        }
    },
    
}

export default PaymentProvider;