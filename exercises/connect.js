const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const connect = () => {
  return mongoose.connect("mongodb://localhost:27017/todos");
};
module.exports = connect;
