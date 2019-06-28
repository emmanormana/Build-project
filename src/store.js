import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { authMiddleware } from './customMiddleware/authMiddleware';

const store = () => {
	if (process.env.NODE_ENV === 'development') {
		return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger, authMiddleware)));
	} else {
		return createStore(rootReducer, applyMiddleware(thunk, authMiddleware));
	}
};

export default store;
