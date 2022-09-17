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
//send the information out to the contracts.js route
module.exports = { getAll, getSingle };