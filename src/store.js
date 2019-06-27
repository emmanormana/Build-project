import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {authMiddleware} from './customMiddleware/authMiddleware';

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, authMiddleware)));
