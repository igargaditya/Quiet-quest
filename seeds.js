const mongoose = require("mongoose");

// requiring our library model
const Library = require("./models/lib.js");

// conecting to our library database
mongoose
  .connect("mongodb://localhost:27017/library")
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Error while connecting database"));

const data = [
  {
    name: "Lesiure Brainz",
    price: 2500,
    location: "Gurugram",
  },
  {
    name: "Scholar's Hub",
    price: 2600,
    location: "Gurugram",
  },
  {
    name: "Central Library",
    price: 2100,
    location: "Gurugram",
  },
];
const seedDb = async () => {
  await Library.deleteMany({});
  await Library.insertMany(data);
};

seedDb().then(() => {
  mongoose.connection.close();
});
