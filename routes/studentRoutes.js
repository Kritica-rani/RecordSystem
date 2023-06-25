// import all the req packages
const express = require("express");
const router = express.Router();
//import the controller file
const studentController = require("../controller/studentController");

//Routes or api
//1. create student
// router.get("/",(req,res)=>{

// })
router.post("/add", studentController.createStudent);

module.exports = router;
