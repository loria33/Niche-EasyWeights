import {combineReducers} from 'redux';
import AuthReducer from '../Reducers/AuthReducer';

const rootReducer = (state, action) => {
   
    if (action.type === 'RESET_EASYWEITGHTS') {
        const { auth } = state;
        state = { auth };
    }
  
    return appReducer(state, action);
  }
  
const appReducer = combineReducers({
    authreducer : AuthReducer,
})

export default rootReducer;