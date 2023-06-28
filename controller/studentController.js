//1. import model
const Student = require("../model/student");

module.exports.createStudent = async (req, res) => {
  try {
    //logic
    console.log("req", req.body);
    //1. destructure
    const {
      name,
      contact,
      age,
      subjects,
      studentId,
      address = "NA",
    } = req.body;
    console.log("type", typeof age);
    // 2. handle the edge cases/errors
    if (!name || !contact || !studentId || !age) {
      return res.status(400).json({
        message: "Please fill all the required fields!!",
        data: {},
      });
    }
    if (age > 5 || age < 3) {
      return res.status(400).json({
        message: "The age must be between 3 to 5",
        data: {},
      });
    }
    // if everything goes well then create student
    const createdStudent = await Student.create({
      name,
      contact,
      age,
      subjects,
      studentId,
      address,
    });
    return res.status(201).json({
      message: "Record created sucessfully",
      data: createdStudent,
    });
  } catch (err) {
    //error
    //unique constarint voilation
    if (err.code === 11000) {
      return res.status(400).json({
        message: "Please provide unique student id",
        data: {},
      });
    }
    return res.status(500).json({
      message: "Something went wrong while creating record",
      data: {},
    });
  }
};

// Routes/api for update
// Route to delete
// Route to get all the students (pagination)
//Make a endpoint to update the existing records

module.exports.UpdateRecord = async (req, res) => {
  try {
    // we will get id in params--> to unquily identify the resource
    //I also require fields which I need to update
    const { id } = req.params;
    const { name, contact, address } = req.body;
    console.log("id", id);
    console.log("req.body", req.body);
    if (!name || !contact) {
      return res.status(400).json({
        message: "Please send all the required fields",
        data: {},
      });
    }
    const updatedRecord = await Student.findByIdAndUpdate(
      id,
      {
        name,
        contact,
        address,
      },
      { new: true }
    );
    //when it unable to find any record
    if (!updatedRecord) {
      return res.status(404).json({
        message: "No record found with the given Id",
        data: {},
      });
    }
    // return res
    return res.status(200).json({
      message: "Record updated sucessfully",
      data: updatedRecord,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while creating record",
      data: {},
    });
  }
};

//Delete the record
module.exports.deleteStudentRecord = async (req, res) => {
  try {
    //validate.js
    //recive the id from params
    const { id } = req.params;
    console.log("id params", id);
    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return res.status(404).json({
        message: "No record found with given id",
        data: {},
      });
    }
    return res.status(200).json({
      message: "Record deleted SucessFully",
      data: deletedStudent,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something went wrong while deleting record",
      data: {},
    });
  }
};
//get all --> pagination--> query
//deleteOne --> delete single document age $gte:5
//findOneAndDelete--> finds the first document and deletes
