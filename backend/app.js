const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require("./mongodb/db");
const userDataRoute = require("./routes/userData_routes");
const userFormRoute = require("./routes/userForm_routes");

const app = express();
app.use(bodyParser.json());

app.use(cors({origin: 'http://localhost:4200' }));

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

  app.use('/user',userDataRoute);
  app.use('/form',userFormRoute);

  app.listen(3000,()=>{
    console.log('Server Started on port 3000');
  });