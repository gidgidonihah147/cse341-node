const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'CSE341-Project2',
        description: 'Swagger API Documentation for project 2 assigment for CSE 341 - Tristin Parker'
    },
    host: 'localhost:3000',
    schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);