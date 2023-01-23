const axios = require('axios');

const getUsers = async () => {
    const response = await axios.get('https://reqres.in/api/users');
    // console.log("RESPONSE: ", response);
    return response;
};

module.exports = { getUsers }