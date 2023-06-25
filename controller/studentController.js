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

// Routes for update
// Route to delete
// Route to get all the students (pagination)
