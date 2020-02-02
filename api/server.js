const express = require('express');
const cors = require('cors');
const helmet =require('helmet');
const server = express();
const userRouter = require('../user/user-router');


server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api', userRouter);
module.exports = server;

