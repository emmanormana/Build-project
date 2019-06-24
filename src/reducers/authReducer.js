import types from '../actions';

const initialState = {
    user: {},
    isLoading: false,
    errors: null
};

export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.LOGIN_START:
            return {...state, isLoading: true};
        case types.LOGIN_SUCCESS:
            return {...state, isLoading: false};
        case types.LOGIN_FAIL:
            return {...state, isLoading: false};
        case types.CREATE_USER_START:
            return {...state, isLoading: true};
        case types.CREATE_USER_SUCCESS:
            return {...state, isLoading: false};
        case types.CREATE_USER_FAIL:
            return {...state, isLoading: false};
        default:
            return state;
    }
}