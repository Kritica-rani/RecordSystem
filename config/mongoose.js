// 1. require all the packages
const mongoose = require("mongoose");
// connect to db

const MONGO =
  

mongoose
  .connect(MONGO)
  .then(() => console.log("DB COnnecnected succesfully"))
  .catch((err) => console.log("error in connecting db", err));
