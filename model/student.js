// import all the packages

const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const studentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
  studentId: {
    type: String,
    required: true,
    unique: true,
  },
  subjects: [
    {
      type: String,
    },
  ],
  age: {
    type: Number,
    required: true,
    min: 3,
    max: 5,
  },
  address: {
    type: String,
  },
});

const Student = mongoose.model("Student", studentSchema);
// export the model
module.exports = Student;
