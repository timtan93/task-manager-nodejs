/* eslint-disable no-console */
const mongoose = require("mongoose");


mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});


