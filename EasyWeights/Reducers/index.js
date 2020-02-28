import {combineReducers} from 'redux';
import AuthReducer from '../Reducers/AuthReducer';
import PaymentsReducer from '../Reducers/PaymentsReducer';

const rootReducer = (state, action) => {
   
    if (action.type === 'RESET_EASYWEITGHTS') {
        const { auth } = state;
        state = { auth };
    }
  
    return appReducer(state, action);
  }
  
const appReducer = combineReducers({
    authreducer : AuthReducer,
    paymentsreducer:PaymentsReducer,
})

export default rootReducer;