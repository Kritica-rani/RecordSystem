//1. import all the required packages whatever is needed
const express = require("express");
const app = express();
const PORT = 9000;
// import the db
const db = require("./config/mongoose");
// import the routes file
const routes = require("./routes/studentRoutes");
// middleware
app.use(express.urlencoded());
app.use(express.json());
app.use("/", routes);
//start a server so that we can listen req and response
app.listen(PORT, (err) => {
  if (err) {
    return console.log("Error in running the express app", err);
  }
  console.log("APP is running  on port", PORT);
});
