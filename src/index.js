require('dotenv').config();
const express = require('express');
const route = require('./router');

const app = express();

app.use(express.json());
app.use(route);

app.listen(process.env.PORT, () => {
    console.log("Rodando na porta 3000")
})