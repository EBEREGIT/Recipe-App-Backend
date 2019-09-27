const express = require("express");
const bodyParser = require("body-parser");

// call and initialize express here
const app = express();

const mongoose = require("mongoose");
const Recipe = require("./models/recipe");

// connect this app to MongoDB with mongoose
mongoose
  .connect(
    "mongodb+srv://Ebere:31904145@cluster0-ev2sa.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("Successfully connected to MongoDB Atlas, Yaeyeh!");
  })
  .catch(error => {
    console.log("Unable to connect to MongoDB Atlas!");
    console.error(error);
  });

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//   to help extract .json object use the body parser as follows
app.use(bodyParser.json());

// Create an item here
app.post("/api/recipes", (req, res, next) => {
  const recipe = new Recipe({
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time,
    _id: req.body._id
  });
  recipe
    .save()
    .then(() => {
      res.status(201).json({
        message: "Post saved successfully!"
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
});

// updating an item
app.put("/api/recipes/:id", (req, res, next) => {
  const recipe = new Recipe({
    _id: req.params.id,
    title: req.body.title,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    difficulty: req.body.difficulty,
    time: req.body.time,
  });
  Recipe.updateOne({ _id: req.params.id }, recipe)
    .then(() => {
      res.status(201).json({
        message: "Post updated successfully!"
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
});

// deleting
app.delete("/api/recipes/:id", (req, res, next) => {
  Recipe.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({
        message: "Deleted!"
      });
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
});

// reading a single item from db
app.get("/api/recipes/:id", (req, res, next) => {
  Recipe.findOne({
    _id: req.params.id
  })
    .then(recipe => {
      res.status(200).json(recipe);
    })
    .catch(error => {
      res.status(404).json({
        error: error
      });
    });
});

//   retrieve items here
app.use("/api/recipes", (req, res, next) => {
  Recipe.find()
    .then(recipes => {
      res.status(200).json(recipes);
    })
    .catch(error => {
      res.status(400).json({
        error: error
      });
    });
});

module.exports = app;
