const axios = require('axios');
require('dotenv').config();

const url = process.env.URLPIPEDRIVE;

module.exports = {
  async clientsWons() {
      const response = await axios.get(url);
      return response.data;
    
  }

}
