const mongoose = require('mongoose');
const User = require('./models/user.model');

const connection = 'mongodb://mongo:27017/dockerize-me';

const connectDb = () => {
  return mongoose.connect(connection);
};

module.exports = connectDb;
