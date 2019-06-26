import types from './index';
import toolApi from '../api/toolsApi';

export const getTools = () => async dispatch => {
    dispatch({type: types.GET_TOOLS_START});
    try {
        const response = await toolApi.get('/tools');
        dispatch({type: types.GET_TOOLS_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: types.GET_TOOLS_FAIL, payload: error.response.data});
        console.log(error);
    }
};
