const mongoose = require('mongoose');
require('dotenv').config();

module.exports = {

  Database() {
    try {
      mongoose.connect(process.env.DBCONNECT, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });
      mongoose.connection.on('connected', () => {
        console.log('Banco conectado')
      })
      
      
    } catch (e) {
      console.log({ Error: e });
    }
  },


};
