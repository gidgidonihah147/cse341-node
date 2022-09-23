//Pull the DB connection from the database file
const mongodb = require('../database/mongodb');
//Pull in the object id from the URL for the getSingle search
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  //pull all documents from the listed database as there is nothing in the find perimeters
  const result = await mongodb.getDb().db().collection('contacts').find();
  //Display the results of the search in an array so its readable in chrome
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  //Interact with the URL to get the object which in this case would be the ID of the contact
  const dbId = new ObjectId(req.params.id);
  //Pull the results from the table called contacts from the DB called in the mongodb.js file
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: dbId});
  //change the results to an array so that its more readable
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const addContact = async (req, res) => {
  //creates the variable of contact so that when we post the data to the database it knows what to update where with the help of bodyparser added in the server page
  const contact = {firstName: req.body.firstName,lastName: req.body.lastName,email: req.body.email,favoriteColor: req.body.favoriteColor,birthday: req.body.birthday};
  //adds the contact to the database using the data from the contact variable
  const response = await mongodb.getDb().db().collection('contacts').insertOne(contact);
  //If the response back from the database was acknowledged (request successful) then note as much in the console
  if (response.acknowledged) {
    console.log(`You have successfully added a new contact to the database.`)
  } 
  //If unsuccessful show a server error of 500 and post an error message to the console
  else {
    res.status(500).json(response.error || 'There was an error while adding your contact. Please try again.');
  }
};

const updateContact = async (req, res) => {
  //Interact with the URL to get the object which in this case would be the ID of the contact
  const userId = new ObjectId(req.params.id);
  //creates the variable of contact so that when we post the data to the database it knows what to update where with the help of bodyparser added in the server page
  const contact = {firstName: req.body.firstName,lastName: req.body.lastName,email: req.body.email,favoriteColor: req.body.favoriteColor,birthday: req.body.birthday};
  //replaces the contact data in the database using the data from the contact variable
  const response = await mongodb.getDb().db().collection('contacts').replaceOne({ _id: userId }, contact);
  //if the response back from the database that there was at least one row deleted, then output a success message to the log and send a status of 204
  if (response.modifiedCount > 0) {
    res.status(204).send();
    console.log(`The update you requested was successful for ID:${userId}`)
  } 
  //If unsuccessful show a server error of 500 and post an error message to the console
  else {
    res.status(500).json(response.error || 'There was an error while updating your contact. Please try again.');
    console.log(response);
  }
};

const removeContact = async (req, res) => {
  //Interact with the URL to get the object which in this case would be the ID of the contact
  const userId = new ObjectId(req.params.id);
  //creates the variable of contact so that when we post the data to the database it knows what to update where with the help of bodyparser added in the server page
  const response = await mongodb.getDb().db().collection('contacts').deleteOne({ _id: userId }, true);
  //if the response back from the database that there was at least one row deleted, then output a success message to the log and send a status of 204
  if (response.deletedCount > 0) {
    res.status(204).send();
    console.log(`The contact with the ID of ${userId} has been deleted.`)
  } 
  //If unsuccessful show a server error of 500 and post an error message to the console
  else {
    res.status(500).json(response.error || 'There was an error while deleting your contact. Please try again.');
  }
};

//send the information out to the contracts.js route
module.exports = {getAll, getSingle, addContact, updateContact, removeContact};