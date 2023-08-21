const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const connectDB = require('./model/db');

const app = express();
connectDB();

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
