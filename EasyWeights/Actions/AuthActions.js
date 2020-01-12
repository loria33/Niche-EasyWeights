import * as AuthTypes from '../ActionTypes/AuthTypes';


export function isConnected(isConnected) {
    debugger;
    return { type: AuthTypes.AUTH_IS_CONNECTED, isConnected };
}
export function isAuthenticated(isAuthenticated) {
    return { type: AuthTypes.AUTH_IS_AUTHENTICATED, isAuthenticated };
}
export function hasSignedTermsAndConditions(hasSignedTermsAndConditions) {
    return { type: AuthTypes.AUTH_SIGNED_TERMS, hasSignedTermsAndConditions };
}
export function profileName(profileName) {
    return { type: AuthTypes.AUTH_PROFILE_NAME, profileName };
}
