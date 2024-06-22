const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const libSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: 1000,
  },
  location: {
    type: String,
    required: true,
  },
});

const Lib = mongoose.model("Lib", libSchema);
module.exports = Lib;
