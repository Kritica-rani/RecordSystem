// 1. require all the packages
const mongoose = require("mongoose");
require("dotenv").config();

const MONGO = process.env.MONGOURL;
// connect to db
// ?? acces the mongo url ??
mongoose
  .connect(MONGO)
  .then(() => console.log("DB Connecnected succesfully"))
  .catch((err) => console.log("error in connecting db", err));
