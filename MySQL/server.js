const express = require('express');
const controller = require('./db/controllers/controller')
const app = express();

controller.getData();
controller.getCount();
