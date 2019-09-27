const express = require('express');

const app = express();

// Curb Cores Error by adding a header here
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

//   check for successfull server connection here
app.use((req, res) => {
   res.json({ message: 'Your request was successfully successful!' }); 
});

module.exports = app;