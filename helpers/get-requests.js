require('dotenv').config()
const axios = require('axios');

const baseUrl = process.env.BASE_URL;

const getUsers = async () => {
    const response = await axios.get(`${baseUrl}/users`);
    // console.log("RESPONSE: ", response);
    return response;
};

module.exports = { getUsers }