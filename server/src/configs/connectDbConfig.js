const mongoose = require('mongoose');
const connectionString = require('../utils/connectionString');
const connectDb = async () =>
  mongoose.connect(connectionString(), {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
module.exports = connectDb;
