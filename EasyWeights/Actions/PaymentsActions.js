import * as PaymentTypes from '../ActionTypes/PaymentTypes';

export function showPaymentReadyButton(showButtonFlag) {
    return { type: PaymentTypes.ON_SHOW_DONE_BUTTON, showButtonFlag };
}
export function saveCurrentCC(CCformData) {
    return { type: PaymentTypes.ON_DONE_CC_ENTRY_VALID, CCformData };
}
export function resetCurrentCC(flag) {
    return { type: PaymentTypes.ON_DONE_CC_ENTRY_INVALID,flag};
}

