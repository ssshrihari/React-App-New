const express = require('express');
var mongo = require('mongodb');
const app = express();

require('dotenv').config();
app.use(express.json());

const usersRouter = require('./routes/users');
app.use('/users', usersRouter);

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});