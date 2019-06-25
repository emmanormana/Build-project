import types from '../actions';

export const authMiddleware = state => next => action => {
    if (action.type === types.LOGIN_SUCCESS || action.type === types.CREATE_USER_SUCCESS) {
        localStorage.setItem('tools_user', JSON.stringify(action.payload.token));
    }
    if (action.type === types.LOGOUT_SUCCESS) {
        localStorage.removeItem('tools_user');
    }

    next(action);
};