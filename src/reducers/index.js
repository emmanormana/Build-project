import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import auth from './authReducer';
import tools from './toolsReducer';


export default combineReducers({
	auth, tools, form
});
