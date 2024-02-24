const express = require('express');
const { registerUser, updateUser, detailUser, getUsers, deleteUser } = require('./controllers/userController');
const { registerTheme } = require('./controllers/themeController');
const { registerPost, updatePost } = require('./controllers/postController');

const validateRequest = require('./middlewares/validateRequest');
const { userSchema } = require('./validations/userSchema');
const { themeSchema } = require('./validations/themeSchema');
const { postSchema } = require('./validations/postSchema');

const route = express();

route.get('/user', getUsers);
route.get('/user/:id', detailUser);
route.delete('/user/:id', deleteUser);
route.post('/user', validateRequest(userSchema), registerUser);
route.put('/user/:id', validateRequest(userSchema), updateUser);


route.post('/theme', validateRequest(themeSchema), registerTheme);
route.post('/post', validateRequest(postSchema), registerPost);
route.put('/post/:id', validateRequest(postSchema), updatePost);




module.exports = route;