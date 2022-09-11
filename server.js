const express = require('express')
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const app = express()
const port = 3000

const uri = "mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.miea0ni.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  console.log("DB Connected Successfully");
  // perform actions on the collection object
  client.close();
});

app.use('/',require('./routes'))

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})