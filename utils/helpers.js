require('dotenv').config()
const axios = require('axios');
const baseUrl = process.env.BASE_URL;
const URL = require('./endpoints')

const getAllUsers = async () => {
    const response = await axios.get(`${baseUrl}${URL.users}`);
    // console.log("RESPONSE: ", response);
    return response;
};

async function userIdWithMethod(method, id) {
    const conf = {
        method: method,
        baseURL: baseUrl,
        url: `${URL.user}${id}`
    }
    try {
        const response = await axios(conf);
        return response;
    } catch (error) {
        console.error(error);
    }
};

module.exports = { getAllUsers, userIdWithMethod }