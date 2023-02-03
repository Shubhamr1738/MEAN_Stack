const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('./mongoDB/connection/db.js');
const userDataRoutes = require('./routes/userData-routes.js');
const userFormRoutes = require('./routes/userForm-routes.js');



const app = express();
app.use(bodyParser.json());

app.use(cors({ origin: 'http://localhost:4200' }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.use('/user', userDataRoutes);
  app.use('', userFormRoutes);

app.listen(3000, () => {
    console.log(`Server started on port 3000`);
});