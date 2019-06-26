import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import auth from './authReducer';
import toolList from './toolsReducer';


export default combineReducers({
	auth, toolList, form
});
