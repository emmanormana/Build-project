import axios from 'axios';
import types from './index';

export const doLogin = credentials => async dispatch => {
    dispatch({type: types.LOGIN_START});
    try {
        const response = await axios.post('someurl', credentials);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

export const doCreateAccount = newUserDetails => async dispatch => {
    dispatch({type: types.CREATE_USER_START});
    try {
        const response = await axios.post('someurl', newUserDetails);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};