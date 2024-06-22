const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const methodoverride = require("method-override");
// requiring our library model
const Library = require("./models/lib.js");

const app = express();

// conecting to our library database
mongoose
  .connect("mongodb://localhost:27017/library")
  .then(() => console.log("Database Connected"))
  .catch(() => console.log("Error while connecting database"));

app.use(express.urlencoded({ extended: true }));
app.use(methodoverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "allpages"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/library", async (req, res) => {
  const libraries = await Library.find({});
  res.render("libInfo", { libraries });
});

app.get("/library/new", (req, res) => {
  res.render("newLib");
});

app.get("/library/:id", async (req, res) => {
  const libinfo = await Library.findById(req.params.id);
  res.render("libExtraInfo", { libinfo });
});

app.post("/library", async (req, res) => {
  const newlib = new Library(req.body);
  await newlib.save();
  res.redirect(`/library/${newlib.id}`);
});

app.get("/library/:id/edit", async (req, res) => {
  const libinfo = await Library.findById(req.params.id);
  res.render("libEdit", { libinfo });
});

app.put("/library/:id", async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const { name, price, location } = req.body;
  const updatelib = await Library.findByIdAndUpdate(
    id,
    { name: name, price: price, location: location },
    { runValidators: true }
  );
  res.redirect(`/library/${updatelib.id}`);
});

app.delete("/library/:id", async (req, res) => {
  const { id } = req.params;
  await Library.findByIdAndDelete(id);
  res.redirect("/library");
});
app.listen(3000, () => {
  console.log("Serving on port 3000");
});
