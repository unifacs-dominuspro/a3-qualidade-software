const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const cors = require('cors');
const databaseSync = require('./infrastructure/database/building-modeling-structure');
const userCreateInterface = require('./interfaces/user-interface/user-create-interface');
const userAuthInterface = require('./interfaces/user-interface/user-auth-interface');
const mathInterface = require('./interfaces/math-interface/math-interface');
dotenv.config();

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(mathInterface);
server.use(userCreateInterface);
server.use(userAuthInterface);

databaseSync();

server.listen(process.env.NODE_PORT, () => console.log('✔️  Server is running on port ' + process.env.NODE_PORT));