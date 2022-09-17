//Pull the express npm files
const routes = require ('express').Router();

//require the contacts controller so we can pull in the needed variables
const controller = require('../controllers/contacts');

//If no ID is in the URL then run the .getAll function to pull the whole database
routes.get('/', controller.getAll);

//If there is an ID in the URL then run the getSingle function to pull a single contacts information.
routes.get('/:id', controller.getSingle);

//export out routes
module.exports = routes;