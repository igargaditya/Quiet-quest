const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const libSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  price: {
    type: Number,
    default: 1000,
  },
  location: {
    type: String,
    required: true,
  },
  zipCode: {
    type: Number,
  },
});

const Lib = mongoose.model("Lib", libSchema);
module.exports = Lib;
