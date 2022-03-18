/* eslint-disable no-plusplus */
const mongoose = require('mongoose');

let counter = 1;

const CountedId = { type: Number, default: () => counter++ };

const studentSchema = new mongoose.Schema({
  id: CountedId,
  fname: {
    type: String,
    required: [true, 'the fname must be require']
  },
  lname: {
    type: String,
    required: [true, 'the lname must be require']
  },
  nationality: {
    type: String,
    required: [true, 'the nationality must be require']
  },
  email: {
    type: String,
    required: [true, 'the email must be require'],
    unique: true
  },
  address: {
    type: String,
    required: [true, 'the address must be require']
  },
  phone: {
    type: String,
    required: [true, 'the phone must be require'],
    unique: true
  },
  specialization: {
    type: String,
    required: [true, 'the specialization must be require']
  },
  birthdate: {
    type: Date,
    // required: [true, 'the fname must be require']
    default: new Date(Date.now())
  }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
