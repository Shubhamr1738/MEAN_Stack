const mongoose = require('mongoose');

mongoose
  .connect("mongodb+srv://Shubhamr:Shubhamr1738@shubham.j1kxhap.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((e) => {
    console.log("Connection failed!")
    console.log(e.message)
  });