import axios from 'axios';

export const toolsApiWithAuth = () => {
    const token = localStorage.getItem('tools_user');

    return axios.create({
        baseURL: 'https://use-my-tools-app.herokuapp.com',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
};