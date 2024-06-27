const mongoose = require("mongoose");

// requiring our library model
const Library = require("./models/lib.js");

// conecting to our library database
mongoose
  .connect("mongodb://localhost:27017/library")
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Error while connecting database"));

Library.deleteMany({});
const data = [
  {
    name: "Lesiure Brainz",
    price: 2500,
    location: "Gurugram",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPJe8LH151jcfQegVaeqMZXqR7YqFNRS_JsqSO1=s1360-w1360-h1020",
    zipCode: 122009,
  },
  {
    name: "Scholar's Hub",
    price: 2600,
    location: "Gurugram",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPsz4tcaC7oxPIXfzm0zZMLxOxz-ohaYU_iOnjz=s1360-w1360-h1020",
    zipCode: 122009,
  },
  {
    name: "Central Library",
    price: 2100,
    location: "Gurugram",
    image:
      "https://lh3.googleusercontent.com/p/AF1QipPOX09lrAxsf6NjXnmF0xh7zJjpH406bQe6dBET=s1360-w1360-h1020",
    zipCode: 122009,
  },
];
const seedDb = async () => {
  await Library.deleteMany({});
  await Library.insertMany(data);
};

seedDb().then(() => {
  mongoose.connection.close();
});
