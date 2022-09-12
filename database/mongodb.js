const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

const uri = process.env.MONGODB_URI;
let _db;

const initDb = (callback) => {
  MongoClient.connect(uri)
    .then((client) => {
      _db = client;
      callback(null, _db);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  initDb,
  getDb,
};