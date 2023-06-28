// import all the req packages
const express = require("express");
const router = express.Router();
//import the controller file
const studentController = require("../controller/studentController");

//Routes or api
//1. create student
// router.get("/",(req,res)=>{

// })
// add student (route/api for creating student)
router.post("/add", studentController.createStudent);
//recieve id in params
router.put("/update/:id", studentController.UpdateRecord);
// end point to delete any student
router.delete("/delete/:id", studentController.deleteStudentRecord);
module.exports = router;
