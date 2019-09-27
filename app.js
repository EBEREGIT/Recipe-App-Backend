const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// call and initialize express here
const app = express();

// connect this app to MongoDB with mongoose
mongoose.connect('mongodb+srv://Ebere:31904145@cluster0-ev2sa.mongodb.net/test?retryWrites=true&w=majority')
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas, Yaeyeh!');
  })
  .catch((error) => {
    console.log('Unable to connect to MongoDB Atlas!');
    console.error(error);
  });
  
// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//   to help extract .json object use the body parser as follows
  app.use(bodyParser.json());

//   check for successfull server connection here
app.use((req, res) => {
   res.json({ message: 'Your request was successfully successful!' }); 
});

// Create an item here
app.post('/api/recipes', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
      message: 'Recipe created successfully!'
    });
  });

module.exports = app;