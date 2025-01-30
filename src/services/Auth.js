import axios from 'axios';

const API_URL = "http://localhost:1323/api/auth"

export const registerUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`,userData)
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.message : error.message);
    }
}

export const loginUser = async (userData) => {
    try {
        const response = await axios.post(`${API_URL}/login`,userData)
        return response.data;
    } catch (error) {
        console.log(error)
        throw new Error(error.response ? error.response.data.message : error.message);
    }
}
