const express = require('express')
const mongodb = require('./database/mongodb');

const app = express()
const port = 3000

app.use('/',require('./routes'))

mongodb.initDb((err, mongodb) => {
    if (err) {
      console.log(err);
    } else {
      app.listen(port);
      console.log(`Connected to Mongo DB and listening on ${port}`);
    }
  });
