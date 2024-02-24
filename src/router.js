const express = require('express');
const { registerUser, updateUser } = require('./controllers/userController');
const { registerTheme } = require('./controllers/themeController');
const { registerPost } = require('./controllers/postController');

const validateRequest = require('./middlewares/validateRequest');
const { userSchema } = require('./validations/userSchema');
const { themeSchema } = require('./validations/themeSchema');
const { postSchema } = require('./validations/postSchema');

const route = express();

route.post('/user', validateRequest(userSchema), registerUser);
route.put('/user/:id', validateRequest(userSchema), updateUser);

route.post('/theme', validateRequest(themeSchema), registerTheme);
route.post('/post', validateRequest(postSchema), registerPost);



module.exports = route;