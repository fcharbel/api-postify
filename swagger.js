const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./src/index.js'];

const doc = {
    info: {
        version: '3.0.1',
        title: 'api-postify',
        description: 'A API for managing posts by users',
    },
    host: 'api-postify.onrender.com/',
    basePath: '/',
    schemes: ['https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [],
    securityDefinitions: {},
    definitions: {},
    components: {}
};

swaggerAutogen(outputFile, endpointsFiles, doc);