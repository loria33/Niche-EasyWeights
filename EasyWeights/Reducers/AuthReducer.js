import * as AuthTypes from '../ActionTypes/AuthTypes';

const initialState = {
  isConnected: false,
  isAuthenticated:false,
  hasSignedTermsAndConditions:false,
  profileName:''
};

const AuthReducer = (state = initialState, action) => {

    switch (action.type) {
    case AuthTypes.AUTH_IS_CONNECTED:
      return {
        ...state,
        isConnected: action.isConnected
      }
    case AuthTypes.AUTH_IS_AUTHENTICATED:
    return {
        ...state,
        isAuthenticated: action.isAuthenticated
    }
    case AuthTypes.AUTH_SIGNED_TERMS:
        return {
            ...state,
            hasSignedTermsAndConditions: action.hasSignedTermsAndConditions
        }
    case AuthTypes.AUTH_PROFILE_NAME:
        return {
            ...state,
            profileName: action.profileName
        }
   
    default:
      return state;
  }
}

export default AuthReducer;

