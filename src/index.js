require('dotenv').config();
const express = require('express');
const route = require('./router');
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger/swagger_output.json');

const app = express();

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(route);

app.listen(process.env.PORT, () => {
    console.log("Server is listening on PORT 3000...")
})