const express = require('express');
const { registerUser } = require('./controllers/userController');
const { registerTheme } = require('./controllers/themeController');

const validateRequest = require('./middlewares/validateRequest');
const { userSchema } = require('./validations/userSchema');
const { themeSchema } = require('./validations/themeSchema');

const route = express();

route.post('/user', validateRequest(userSchema), registerUser);
route.post('/theme', validateRequest(themeSchema), registerTheme);


module.exports = route;