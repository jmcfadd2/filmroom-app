import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import userReducer from './reducers/userReducer'
import dataReducer from './reducers/dataReducer'
import courseReducer from './reducers/courseReducer'
import sessionReducer from './reducers/sessionReducer'
import uiReducer from './reducers/uiReducer'



const initialState = {}

const middleware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  data: dataReducer,
  courses: courseReducer,
  session: sessionReducer,
  ui: uiReducer,


})

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) :
    compose;

const enhancer = composeEnhancers(applyMiddleware(...middleware));
const store = createStore(reducers, initialState, enhancer);

export default store;