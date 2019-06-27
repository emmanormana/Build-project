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

export const getTool = id => async dispatch => {
    dispatch({type: types.GET_TOOL_START});
    try {
        const response = await toolApi.get(`/tools/${id}`);
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

export const postTools = tools => async dispatch => {
    dispatch({type: types.POST_TOOLS_START});
    console.log(JSON.stringify(tools));
    try {
        const response = await toolApi.post('/tools', tools);
        dispatch({type: types.POST_TOOLS_SUCCESS, payload: response.data})
    } catch(error) {
        console.log(error.response.data);
        dispatch({type: types.POST_TOOLS_FAIL, payload: error.response.data})
    }
};

export const putTool = tools => async dispatch => {
    dispatch({type: types.PUT_TOOL_START});
    try {
        const response = await toolApi.put(`/tools/${tools.id}`, tools);
        console.log(response);
    } catch(error) {
        console.log(error);
    }
};

export const deleteTool = id => async dispatch => {
    dispatch({type: types.DELETE_TOOL_START});
    try {
        const response = await toolApi.delete(`/tools/${id}`);
        dispatch({type: types.DELETE_TOOL_SUCCESS, payload: id});
    } catch(error) {
        dispatch({type: types.DELETE_TOOL_FAIL, payload: error.response.data});
    }
}

