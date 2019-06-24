import { combineReducers } from 'redux';
import auth from './authReducer';
import tools from './toolsReducer';

export default combineReducers({
	auth, tools
});
