/* eslint-disable no-plusplus */
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0
  },
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

const Students = mongoose.model('Student', studentSchema);
module.exports = Students;
