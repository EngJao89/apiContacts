const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const cors = require('cors');

module.exports = mongoose.connect('mongodb+srv://<admin>:<password>@cluster0.bvzl8.mongodb.net/database?retryWrites=true&w=majority',{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(3200);