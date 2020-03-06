import * as PaymentTypes from '../ActionTypes/PaymentTypes';
import PaymentProvider  from '../Providers/paymentprovider';

export function showPaymentReadyButton(showButtonFlag) {
    return { type: PaymentTypes.ON_SHOW_DONE_BUTTON, showButtonFlag };
}
export function saveCurrentCC(CCformData) {
    return { type: PaymentTypes.ON_DONE_CC_ENTRY_VALID, CCformData };
}
export function resetCurrentCC(flag) {
    return { type: PaymentTypes.ON_DONE_CC_ENTRY_INVALID,flag};
}
export function savePaymentToken(token) {
    return { type: PaymentTypes.ON_SAVE_PAYMENT_TOKEN,token};
}


export function makePayment(amount,currency,token) {
    return async (dispatch, state) => {
        return await PaymentProvider.makePayment(amount,currency,token).then((result) => {
           if(result)
            dispatch(makePaymentSuccess(result));
           else
            dispatch(makePaymentFail(flag));
        })
    }
}
export function makePaymentSuccess(order) {
    return { type: PaymentTypes.ON_DONE_PAYMENT_SUCCESS,flag};
}
export function makePaymentFail(makePaymentFailFlag) {
    return { type: PaymentTypes.ON_DONE_PAYMENT_FAIL,makePaymentFailFlag};
}
