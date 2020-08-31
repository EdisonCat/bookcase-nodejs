const express = require('express');
const app = express();
const morgan = require('morgan');
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');
const mongoose = require('mongoose');

mongoose.connect(
    'mongodb+srv://dev:' + process.env.MONGODB_ATLAS_PWD + '@cluster0.xtiy0.mongodb.net/<dbname>?retryWrites=true&w=majority', 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
mongoose.connection.once('open', () => {console.log('connected to database')});
app.use(morgan('dev'));
app.use('/graphql', graphqlHTTP({ schema: schema, graphiql: true }));
app.listen(4000, () => {
    console.log("listening to port 4000");
}); 