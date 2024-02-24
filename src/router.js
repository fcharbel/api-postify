const express = require('express');
const {
    registerUser
} = require('./controllers/userController');

const validateRequest = require('./middlewares/validateRequest');
const { userSchema } = require('./validations/userSchema');

const route = express();

route.post('/user', validateRequest(userSchema), registerUser);

module.exports = route;