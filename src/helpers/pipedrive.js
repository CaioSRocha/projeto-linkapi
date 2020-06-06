const axios = require('axios');
require('dotenv').config();

const url = process.env.URL_PIPEDRIVE + process.env.TOKEN_PIPEDRIVE;

module.exports = {
  async clientsWons() {
      const response = await axios.get(url);
      return response.data;
    
  }

}
