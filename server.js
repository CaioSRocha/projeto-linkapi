const express = require('express');
const bodyParse = require('body-parser');
const initDB = require('./src/services/initialezeDatabase');
const cors = require('cors');

require('./src/model/DealSchema');

const server = express();
server.use(bodyParse.json());
server.use(bodyParse.urlencoded({ extended: false }));
server.use(cors());

initDB.Database();

server.use('/api/v1', require('./src/routes'));

server.listen(8080);