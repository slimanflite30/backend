const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  fname: {
    type: String,
    required: [true, 'the fname must be require']
  },
  lname: {
    type: String,
    required: [true, 'the fname must be require']
  },
  nationality: {
    type: String,
    required: [true, 'the fname must be require']
  },
  email: {
    type: String,
    required: [true, 'the fname must be require']
  },
  address: {
    type: String,
    required: [true, 'the fname must be require']
  },
  phone: {
    type: Number,
    required: [true, 'the fname must be require']
  },
  specialization: {
    type: String,
    required: [true, 'the fname must be require']
  },
  birthdate: {
    type: Date,
    // required: [true, 'the fname must be require']
    default: new Date(Date.now())
  }
});
const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
