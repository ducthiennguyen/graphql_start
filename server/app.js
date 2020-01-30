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

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000, () => {
  console.log('Listening on port 5000')}
);
