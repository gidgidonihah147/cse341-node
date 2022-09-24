const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE341-NODE',
        description: 'Swagger API Documentation for Contacts assigment for CSE 341 - Tristin Parker'
    },
    host: 'tparker-cse341.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);