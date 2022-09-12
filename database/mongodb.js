const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();

//const uri = process.env.MONGODB_URI;
const uri = 'mongodb+srv://Gidgidonihah:Kincaid147@cluster0.miea0ni.mongodb.net/contacts';
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