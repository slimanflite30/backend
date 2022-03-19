/* eslint-disable no-plusplus */
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  id: {
    type: Number,
    default: 0
  },
  name: {
    type: String,
    required: [true, 'the fname must be require']
  },
  specialization: {
    type: String,
    required: [true, 'the specialization must be require']
  },
  graduation: {
    type: Boolean
  },
  type: {
    type: String
  },
  courseCode: {
    type: Number
  },
  academicYear: {
    type: Number
  }
});
const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
