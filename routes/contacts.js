//Pull the express npm files
const routes = require ('express').Router();

//require the contacts controller so we can pull in the needed variables
const controller = require('../controllers/contacts');

//If no ID is in the URL then run the .getAll function to pull the whole database
routes.get('/', controller.getAll);

//If there is an ID in the URL then run the getSingle function to pull a single contacts information.
routes.get('/:id', controller.getSingle);

//Allows the user to run the function createContact and post that data to mongoDB
routes.post('/', controller.addContact);

//Allows the user to run the function updateContact and update the data that was retrieved from mongoDB
routes.put('/:id', controller.updateContact);

//Allows the user to run the function deleteContact and delete the contact entry from mongoDB
routes.delete('/:id', controller.removeContact);

//export out routes
module.exports = routes;