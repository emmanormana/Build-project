import types from '../actions';

const initialState = {
    tools: [{
        id: '',
        owner_id: '',
        image: '',
        location: '',
        tool_name: '',
        tool_description: '',
        rental_price: '',
        length_of_rental: '',
        status: '' //
    }],
    isLoading: false,
    errors: null
}
export default (state = initialState, action) => {
    const {type, payload} = action;
    switch (type) {
        case types.GET_TOOLS_START:
            return {...state, isLoading: true, errors: null};
        case types.GET_TOOLS_SUCCESS:
            return {...state, isLoading: false, errors: null, tools: payload};
        case types.GET_TOOLS_FAIL:
            return {...state, isLoading: false, errors: payload};
        default:
            return state;
    }
}