//Pull the DB connection from the database file
const { mongo } = require('mongoose');
const mongodb = require('../database/mongodb');
//Pull in the object id from the URL for the getContact search
const ObjectId = require('mongodb').ObjectId;

const getContacts = async (req, res, next) => {
  mongodb.initDb;
  //pull all documents from the listed database as there is nothing in the find perimeters
  const result = setTimeout(mongodb.getDb().db().collection('contacts').find(), 3000);
  //Display the results of the search in an array so its readable in chrome
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getContact = async (req, res, next) => {
  const dbId = new ObjectId(req.params.id);
  const result = setTimeout(mongodb.getDb().db().collection('contacts').find({ _id: dbId}), 3000);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = { getContacts, getContact };