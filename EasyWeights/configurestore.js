import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Reducers'
import reduxImutableStateInvariant from 'redux-immutable-state-invariant';


export default function configureStore(preloadedState) {
  const middlewares =process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunkMiddleware] :
  [thunkMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]

  const composedEnhancers = composeWithDevTools(...enhancers)
  const store = createStore(rootReducer, preloadedState,  process.env.NODE_ENV !== 'production'?composedEnhancers:middlewareEnhancer)
  return store
}