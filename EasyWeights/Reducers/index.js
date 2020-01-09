import {combineReducers} from 'redux';

const rootReducer = (state, action) => {
   
    if (action.type === 'RESET_EASYWEITGHTS') {
        const { auth } = state;
        state = { auth };
    }
  
    return appReducer(state, action);
  }
  
const appReducer = combineReducers({
    conversations : ConversationReducer,
})

export default rootReducer;