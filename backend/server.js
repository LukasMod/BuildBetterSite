const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const servicesRoutes = require('./routes/services');
const usersRoutes = require('./routes/users');

const server = express();

server.use(bodyParser.json());
server.use(cors());

server.use('/services', servicesRoutes);
server.use('/users', usersRoutes);

server.listen(8001, () => console.log('Server for services is started...'));
