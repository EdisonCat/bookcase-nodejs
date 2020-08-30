const express = require('express');
const app = express();
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

app.use(morgan('dev'));
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));
app.listen(4000, () => {
    console.log("listening to port 4000");
}); 