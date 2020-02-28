import * as PaymentTypes from '../ActionTypes/PaymentTypes';

const initialState = {
    showButtonFlag: false,
    ccFormData: {}
};

const PaymentsReducer = (state = initialState, action) => {

    switch (action.type) {
    case PaymentTypes.ON_SHOW_DONE_BUTTON:
      return {
        ...state,
        showButtonFlag: action.showButtonFlag
      }
    case PaymentTypes.ON_DONE_CC_ENTRY_VALID:
      return {
        ...state,
        ccFormData: action.ccFormData
      }
      case PaymentTypes.ON_DONE_CC_ENTRY_INVALID:
      return {
        ...state,
        ccFormData: {}
      }
    
    default:
      return state;
  }
}

export default PaymentsReducer;

