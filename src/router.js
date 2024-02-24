const express = require('express');
const { registerUser, updateUser, detailUser, getUsers, deleteUser } = require('./controllers/userController');
const { registerTheme, updateTheme } = require('./controllers/themeController');
const { registerPost, updatePost, getPosts, detailPost, deletePost } = require('./controllers/postController');

const validateRequest = require('./middlewares/validateRequest');
const { userSchema } = require('./validations/userSchema');
const { themeSchema } = require('./validations/themeSchema');
const { postSchema } = require('./validations/postSchema');

const route = express();

route.get('/user', getUsers);
route.get('/user/:id', detailUser);
route.post('/user', validateRequest(userSchema), registerUser);
route.put('/user/:id', validateRequest(userSchema), updateUser);
route.delete('/user/:id', deleteUser);

route.post('/theme', validateRequest(themeSchema), registerTheme);
route.put('/theme/:id', validateRequest(themeSchema), updateTheme);

route.get('/post', getPosts);
route.get('/post/:id', detailPost);
route.post('/post', validateRequest(postSchema), registerPost);
route.put('/post/:id', validateRequest(postSchema), updatePost);
route.delete('/post/:id', deletePost);


module.exports = route;