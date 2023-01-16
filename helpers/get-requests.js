const axios = require('axios');

const getUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users');
    return response;
};

module.exports = { getUsers }