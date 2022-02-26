const axios = require('axios');

const getData = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log('res', response.data)
    return response.data.map(user => user.id.toString());
  } catch (error) {
  }
}

module.exports = getData;
