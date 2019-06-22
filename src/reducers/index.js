import { combineReducers } from 'redux';

const tempReducer = (state = {}, action) => state;

export default combineReducers({
	temp : tempReducer,
});
