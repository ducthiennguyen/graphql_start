const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

const url = `mongodb+srv://thien:ndt12321@graphqlstart-70zq3.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.set('useNewUrlParser', true); // no deprecation warning
mongoose.set('useUnifiedTopology', true); // no deprecation warning
mongoose.connect(url);
mongoose.connection.once('open', () => {
  console.log('Connected to database');
});


// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://thien:ndt12321@graphqlstart-70zq3.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log(err);
//   client.close();
// });


app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('Listening on port 4000')}
);
